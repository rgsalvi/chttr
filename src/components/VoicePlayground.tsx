import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ShoppingBag, CheckCircle2, CircleDashed } from 'lucide-react';
import { VOICE_SCENARIOS, VoiceScenario } from '../data/chttrData';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface VoicePlaygroundProps {
  lang: SiteLanguage;
}

const WAVEFORM_BARS = [
  24, 48, 72, 36, 86, 54, 92, 40, 68, 84, 32, 76, 95, 52, 44, 88, 62, 38,
  74, 90, 46, 64, 82, 34, 70, 56, 88, 42, 76, 58, 92, 48, 66, 36, 52, 28,
];

function formatSeconds(sec: number): string {
  const whole = Math.max(0, Math.floor(sec));
  const m = Math.floor(whole / 60);
  const s = whole % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function VoicePlayground({ lang }: VoicePlaygroundProps) {
  const t = SITE_COPY[lang].voice;

  const [selectedId, setSelectedId] = useState<string>(VOICE_SCENARIOS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.25>(1);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [imgFailedMap, setImgFailedMap] = useState<Record<string, boolean>>({});

  const lastSpokenLineRef = useRef<string | null>(null);
  const scenario: VoiceScenario =
    VOICE_SCENARIOS.find((s) => s.id === selectedId) ?? VOICE_SCENARIOS[0];

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    lastSpokenLineRef.current = null;
  };

  const speakLine = (text: string, speechLang: string, isAi: boolean) => {
    if (!voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLang;
    utterance.rate = playbackSpeed * (isAi ? 1.03 : 0.98);
    utterance.pitch = isAi ? 1.08 : 0.92;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = window.setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.25 * playbackSpeed;
        if (next >= scenario.durationSec) {
          setIsPlaying(false);
          stopSpeech();
          return scenario.durationSec;
        }
        return next;
      });
    }, 250);

    return () => window.clearInterval(interval);
  }, [isPlaying, playbackSpeed, scenario.durationSec]);

  useEffect(() => {
    if (!isPlaying) return;
    const activeLine = scenario.lines.find(
      (line) => currentTime >= line.startTime && currentTime < line.endTime
    );
    if (activeLine && lastSpokenLineRef.current !== activeLine.id) {
      lastSpokenLineRef.current = activeLine.id;
      speakLine(activeLine.text, activeLine.speechLang, activeLine.speaker === 'ai');
    }
  }, [currentTime, isPlaying, scenario, voiceEnabled, playbackSpeed]);

  const handleSelectScenario = (id: string) => {
    stopSpeech();
    setIsPlaying(false);
    setCurrentTime(0);
    setSelectedId(id);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSpeech();
    } else {
      if (currentTime >= scenario.durationSec) {
        setCurrentTime(0);
      }
      lastSpokenLineRef.current = null;
      setIsPlaying(true);
    }
  };

  const handleSeek = (targetTime: number) => {
    const clamped = Math.max(0, Math.min(scenario.durationSec, targetTime));
    setCurrentTime(clamped);
    lastSpokenLineRef.current = null;
    if (isPlaying) {
      const line = scenario.lines.find(
        (l) => clamped >= l.startTime && clamped < l.endTime
      );
      if (line) {
        lastSpokenLineRef.current = line.id;
        speakLine(line.text, line.speechLang, line.speaker === 'ai');
      }
    }
  };

  const toggleVoice = () => {
    const next = !voiceEnabled;
    setVoiceEnabled(next);
    if (!next) {
      stopSpeech();
    }
  };

  const progressPct = Math.min(100, (currentTime / scenario.durationSec) * 100);
  const unlockedEvents = scenario.cartEvents.filter((ev) => currentTime >= ev.triggerAt);
  const isPaid = unlockedEvents.some((ev) => ev.kind === 'paid');

  return (
    <section id="hear-calls" className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-lime)]">
            {t.eyebrow}
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]"
            style={{ textWrap: 'balance' }}
          >
            {t.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            {t.subtitle}
          </p>
        </div>

        {/* Scenario Segmented Tabs */}
        <div
          role="tablist"
          aria-label="Voice call scenarios"
          className="mt-8 inline-flex flex-wrap gap-1.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-1.5"
        >
          {VOICE_SCENARIOS.map((item) => {
            const active = item.id === scenario.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelectScenario(item.id)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                    : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]'
                }`}
              >
                {item.tabLabel} ({item.durationLabel})
              </button>
            );
          })}
        </div>

        {/* Player + Live Shopify Cart Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-5 sm:p-6 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? 'Pause call playback' : 'Play call playback'}
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-lime)] text-[var(--accent-on-lime)] transition-transform duration-150 hover:bg-[var(--accent-lime-hover)] active:scale-95 cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-current" aria-hidden="true" />
                  ) : (
                    <Play className="h-5 w-5 fill-current translate-x-0.5" aria-hidden="true" />
                  )}
                </button>
                <div>
                  <p className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {scenario.brandName}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {scenario.languageTag} ·{' '}
                    <span className="font-mono-tabular text-[var(--text-body)]">
                      {formatSeconds(currentTime)} / {scenario.durationLabel}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.25 : 1))}
                  className="rounded-lg border border-[var(--border-card)] bg-[var(--bg-inset)] px-2.5 py-1.5 font-mono-tabular text-xs font-medium text-[var(--text-body)] hover:border-[var(--border-strong)] cursor-pointer"
                >
                  {playbackSpeed}x
                </button>
                <button
                  type="button"
                  onClick={toggleVoice}
                  aria-label={voiceEnabled ? 'Mute synthesized voice' : 'Unmute synthesized voice'}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-inset)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-body)] hover:border-[var(--border-strong)] cursor-pointer"
                >
                  {voiceEnabled ? (
                    <>
                      <Volume2 className="h-3.5 w-3.5 text-[var(--accent-lime)]" aria-hidden="true" />
                      <span>{t.audioOn}</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="h-3.5 w-3.5 text-[var(--text-secondary)]" aria-hidden="true" />
                      <span>{t.muted}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5">
              <div
                role="slider"
                tabIndex={0}
                aria-label="Call playback progress"
                aria-valuemin={0}
                aria-valuemax={scenario.durationSec}
                aria-valuenow={Math.round(currentTime)}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const ratio = (e.clientX - rect.left) / rect.width;
                  handleSeek(ratio * scenario.durationSec);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') handleSeek(currentTime + 3);
                  if (e.key === 'ArrowLeft') handleSeek(currentTime - 3);
                }}
                className="flex h-16 w-full cursor-pointer items-end justify-between gap-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-inset)] px-3 py-3 focus-visible:outline-2 focus-visible:outline-[var(--accent-lime)]"
              >
                {WAVEFORM_BARS.map((heightPct, idx) => {
                  const barProgress = (idx / WAVEFORM_BARS.length) * 100;
                  const active = barProgress <= progressPct;
                  const dynamicBoost =
                    isPlaying && active ? ((idx * 7 + Math.floor(currentTime * 4)) % 14) - 7 : 0;
                  const finalHeight = Math.max(18, Math.min(100, heightPct + dynamicBoost));

                  return (
                    <span
                      key={idx}
                      aria-hidden="true"
                      className="w-full rounded-full transition-colors duration-150"
                      style={{
                        height: `${finalHeight}%`,
                        backgroundColor: active ? scenario.accentHex : 'rgba(255,255,255,0.22)',
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-5 space-y-3 chttr-scroll max-h-[300px] overflow-y-auto pr-1">
              {scenario.lines.map((line) => {
                const isActive =
                  currentTime >= line.startTime && currentTime < line.endTime;
                const isPassed = currentTime >= line.endTime;
                const isAi = line.speaker === 'ai';

                return (
                  <button
                    key={line.id}
                    type="button"
                    onClick={() => {
                      handleSeek(line.startTime);
                      if (!isPlaying) setIsPlaying(true);
                    }}
                    className={`w-full text-left rounded-xl border p-4 transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'border-[var(--accent-lime)] bg-[var(--accent-lime)]/[0.08]'
                        : isPassed
                        ? 'border-[var(--border-card)] bg-[var(--bg-inset)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-inset)]/70 hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-[var(--text-primary)]">
                        {line.name}{' '}
                        <span className="font-normal text-[var(--text-secondary)]">
                          · {line.cityOrRole}
                        </span>
                      </span>
                      <span
                        className={`font-mono-tabular ${
                          isAi ? 'text-[var(--accent-lime)]' : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {formatSeconds(line.startTime)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      “{line.text}”
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right 5 Cols: Live Shopify Cart State Sidebar */}
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-5 sm:p-6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-[var(--accent-lime)]" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                    {t.cartTitle}
                  </h3>
                </div>
                <span className="font-mono-tabular text-xs font-medium text-[var(--text-secondary)]">
                  {isPaid ? t.orderConfirmed : t.syncing}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)]">
                  {imgFailedMap[scenario.id] ? (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1A1D2B] to-[#090A0F] p-2 text-center">
                      <ShoppingBag className="h-6 w-6 text-[var(--accent-lime)]" aria-hidden="true" />
                      <span className="mt-1 text-[10px] text-[var(--text-secondary)] leading-tight">
                        {scenario.brandName}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={scenario.imagePath}
                      alt={scenario.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setImgFailedMap((prev) => ({ ...prev, [scenario.id]: true }))
                      }
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[var(--text-secondary)]">{scenario.brandName}</p>
                  <p className="mt-0.5 font-display text-sm sm:text-base font-bold text-[var(--text-primary)] truncate">
                    {scenario.productTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                    {scenario.productVariant}
                  </p>
                  <div className="mt-2 flex items-baseline gap-2 font-mono-tabular">
                    <span className="text-base font-bold text-[var(--accent-lime)]">
                      ₹{scenario.finalPriceInr.toLocaleString('en-IN')}
                    </span>
                    {scenario.originalPriceInr > scenario.finalPriceInr && (
                      <span className="text-xs text-[var(--text-muted)] line-through">
                        ₹{scenario.originalPriceInr.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2.5 border-t border-[var(--border-subtle)] pt-5">
                <p className="text-xs font-medium text-[var(--text-secondary)]">{t.eventsTitle}</p>
                {scenario.cartEvents.map((ev) => {
                  const unlocked = currentTime >= ev.triggerAt;
                  return (
                    <div
                      key={ev.id}
                      className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm transition-all duration-200 ${
                        unlocked
                          ? ev.kind === 'paid'
                            ? 'border-[var(--accent-lime)] bg-[var(--accent-lime)]/12 text-[var(--text-primary)]'
                            : 'border-[var(--border-card)] bg-[var(--bg-inset)] text-[var(--text-primary)]'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-inset)]/60 text-[var(--text-muted)]'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 font-medium">
                        {unlocked ? (
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[var(--accent-lime)]"
                            aria-hidden="true"
                          />
                        ) : (
                          <CircleDashed
                            className="h-4 w-4 shrink-0 text-[var(--text-muted)]"
                            aria-hidden="true"
                          />
                        )}
                        <span>{ev.label}</span>
                      </span>
                      <span className="font-mono-tabular text-xs text-[var(--text-secondary)]">
                        {formatSeconds(ev.triggerAt)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-secondary)]">
              <span>{t.outcomeNote}</span>
              <span className="font-mono-tabular font-semibold text-[var(--text-primary)]">
                ₹{Math.min(200, Math.round(scenario.finalPriceInr * 0.03))} {t.deductionSuffix}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
