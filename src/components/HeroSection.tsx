import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import {
  Check,
  PhoneOutgoing,
  Volume2,
  CreditCard,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { DEMO_LANGUAGES, DemoLanguage } from '../data/chttrData';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    const startVal = prevRef.current;
    const controls = animate(startVal, value, {
      duration: startVal === 0 ? 1.15 : 0.75,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
      onComplete: () => {
        prevRef.current = value;
      },
    });
    return () => controls.stop();
  }, [value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString('en-IN');

  return (
    <span className="font-mono-tabular">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

interface HeroSectionProps {
  lang: SiteLanguage;
  phoneInputRef: React.RefObject<HTMLInputElement | null>;
}

export function HeroSection({ lang, phoneInputRef }: HeroSectionProps) {
  const t = SITE_COPY[lang].hero;

  const [storeUrl, setStoreUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedLang, setSelectedLang] = useState<DemoLanguage>('Hinglish');
  const [errorMsg, setErrorMsg] = useState('');
  const [simStep, setSimStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [processedMillions, setProcessedMillions] = useState(4.2);
  const [ordersToday, setOrdersToday] = useState(120);
  const [callsToday, setCallsToday] = useState(348);
  const [eventIdx, setEventIdx] = useState(0);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const tickerInterval = window.setInterval(() => {
      setProcessedMillions((prev) => Number((prev + 0.01).toFixed(2)));
      setOrdersToday((prev) => prev + 1);
      setCallsToday((prev) => prev + 2);
      setEventIdx((prev) => (prev + 1) % 3);
    }, 4500);
    return () => window.clearInterval(tickerInterval);
  }, []);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => {
      clearTimers();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const cleanDigits = (val: string) => val.replace(/\D/g, '').slice(0, 10);

  const formatDisplayPhone = (digits: string) => {
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  };

  const resolvedStoreName = (() => {
    const trimmed = storeUrl.trim().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
    return trimmed || 'urbanmonkey-demo.myshopify.com';
  })();

  const speakDemoGreeting = (voiceLang: DemoLanguage) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const item = DEMO_LANGUAGES.find((l) => l.label === voiceLang);
    if (!item) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.greeting);
    utterance.lang = item.speechLang;
    utterance.rate = 1.02;
    utterance.pitch = 1.05;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleStartSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = cleanDigits(phoneNumber);
    if (digits.length !== 10 || !/^[6-9]\d{9}$/.test(digits)) {
      setErrorMsg(t.phoneError);
      phoneInputRef.current?.focus();
      return;
    }

    setErrorMsg('');
    clearTimers();
    setSimStep(1);

    const t1 = window.setTimeout(() => setSimStep(2), 950);
    const t2 = window.setTimeout(() => {
      setSimStep(3);
      speakDemoGreeting(selectedLang);
    }, 1900);
    const t3 = window.setTimeout(() => setSimStep(4), 3400);

    timersRef.current = [t1, t2, t3];
  };

  const handleReset = () => {
    clearTimers();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSimStep(0);
  };

  const fillDemoPhone = () => {
    setPhoneNumber('9820144712');
    setErrorMsg('');
  };

  const formattedPhone = formatDisplayPhone(cleanDigits(phoneNumber) || '9820144712');

  const simulationSteps = [
    {
      step: 1,
      icon: Check,
      text: t.simStep1(resolvedStoreName),
      meta: '0.8s',
    },
    {
      step: 2,
      icon: Check,
      text: t.simStep2(formattedPhone),
      meta: '1.2s',
    },
    {
      step: 3,
      icon: Volume2,
      text: t.simStep3(selectedLang),
      meta: '2.9s',
    },
    {
      step: 4,
      icon: CreditCard,
      text: t.simStep4,
      meta: t.readyLabel,
    },
  ];

  return (
    <section
      id="hero-demo"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle focused ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,244,106,0.08)_0%,rgba(139,92,246,0.04)_45%,transparent_75%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: High-Impact Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="mb-4 text-xs sm:text-sm font-medium tracking-wide text-[var(--text-secondary)]">
              <span className="text-[var(--accent-lime)] font-semibold">{t.kickerBrand}</span>
              <span className="mx-2 text-[var(--text-muted)]" aria-hidden="true">·</span>
              <span>{t.kickerFounders}</span>
              <span className="mx-2 text-[var(--text-muted)]" aria-hidden="true">·</span>
              <span>{t.kickerHumans}</span>
            </p>

            <h1
              className="font-display font-extrabold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.08]"
              style={{
                fontSize: 'clamp(2.15rem, 4.1vw, 3.65rem)',
                textWrap: 'balance',
              }}
            >
              {t.h1}
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              {t.subtitle}
            </p>

            {/* Concrete Outcomes Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-6">
              <div>
                <p className="font-mono-tabular text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  3 sec
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{t.stat1Label}</p>
              </div>
              <div>
                <p className="font-mono-tabular text-xl sm:text-2xl font-bold text-[var(--accent-lime)]">
                  10+
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{t.stat2Label}</p>
              </div>
              <div>
                <p className="font-mono-tabular text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  ₹0
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{t.stat3Label}</p>
              </div>
            </div>

            {/* Micro-Trust Bar */}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-1.5 text-[var(--text-body)]">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent-lime)]" aria-hidden="true" />
                {t.trust1}
              </span>
              <span className="text-[var(--text-muted)]" aria-hidden="true">·</span>
              <span>{t.trust2}</span>
              <span className="text-[var(--text-muted)]" aria-hidden="true">·</span>
              <span>{t.trust3}</span>
            </p>
          </div>

          {/* Right Column: Interactive Primary CTA Card */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-5 sm:p-7 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.85)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-lime)]/65 to-transparent"
              />

              <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
                <div>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {t.cardTitle}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {t.cardSubtitle}
                  </p>
                </div>
                {simStep > 0 && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-body)] hover:bg-white/5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <RotateCcw className="h-3 w-3" aria-hidden="true" />
                    {t.reset}
                  </button>
                )}
              </div>

              <form onSubmit={handleStartSimulation} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="store-url-input"
                    className="block text-xs font-medium text-[var(--text-body)]"
                  >
                    {t.step1Label}
                  </label>
                  <input
                    id="store-url-input"
                    type="text"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    disabled={simStep > 0}
                    placeholder={t.step1Placeholder}
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-lime)] focus:outline-none disabled:opacity-60"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <label
                      htmlFor="whatsapp-number-input"
                      className="block text-xs font-medium text-[var(--text-body)]"
                    >
                      {t.step2Label}
                    </label>
                    {simStep === 0 && (
                      <button
                        type="button"
                        onClick={fillDemoPhone}
                        className="text-xs font-medium text-[var(--accent-lime)] hover:underline cursor-pointer"
                      >
                        {t.useDemoNumber}
                      </button>
                    )}
                  </div>
                  <div className="mt-1.5 flex overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)] focus-within:border-[var(--accent-lime)]">
                    <span className="inline-flex items-center gap-1.5 border-r border-[var(--border-card)] bg-white/[0.03] px-3 text-sm font-medium text-[var(--text-body)] select-none shrink-0">
                      <span aria-hidden="true">🇮🇳</span>
                      <span className="font-mono-tabular">+91</span>
                    </span>
                    <input
                      ref={phoneInputRef}
                      id="whatsapp-number-input"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(cleanDigits(e.target.value));
                        if (errorMsg) setErrorMsg('');
                      }}
                      disabled={simStep > 0}
                      placeholder="98201 44712"
                      className="w-full bg-transparent px-3.5 py-2.5 font-mono-tabular text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  {errorMsg && (
                    <p role="alert" className="mt-1.5 text-xs text-[#FF6B86]">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <div>
                  <span className="block text-xs font-medium text-[var(--text-body)]">
                    {t.step3Label}
                  </span>
                  <div
                    role="radiogroup"
                    aria-label="Call language"
                    className="mt-1.5 flex flex-wrap gap-1.5"
                  >
                    {DEMO_LANGUAGES.map((item) => {
                      const active = selectedLang === item.label;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          disabled={simStep > 0}
                          onClick={() => setSelectedLang(item.label)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed ${
                            active
                              ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                              : 'border border-[var(--border-card)] bg-[var(--bg-inset)] text-[var(--text-body)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {simStep === 0 ? (
                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-lime)] px-5 py-3.5 text-sm sm:text-base font-bold text-[var(--accent-on-lime)] transition-all duration-150 hover:bg-[var(--accent-lime-hover)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-lime)] cursor-pointer"
                  >
                    <PhoneOutgoing className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t.submitCta}</span>
                  </button>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="sim-tracker"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="mt-3 divide-y divide-[var(--border-subtle)] border-t border-[var(--border-subtle)] pt-3"
                    >
                      {simulationSteps.map((item) => {
                        const completed = simStep >= item.step;
                        const active = simStep === item.step && simStep < 4;
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.step}
                            className={`flex items-start justify-between gap-3 py-2.5 text-xs sm:text-sm transition-opacity duration-200 ${
                              completed ? 'opacity-100' : 'opacity-45'
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <span
                                className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                                  completed
                                    ? 'bg-[var(--accent-lime)]/15 text-[var(--accent-lime)]'
                                    : 'bg-white/5 text-[var(--text-muted)]'
                                }`}
                              >
                                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                              </span>
                              <span
                                className={
                                  completed
                                    ? 'text-[var(--text-primary)]'
                                    : 'text-[var(--text-secondary)]'
                                }
                              >
                                {item.text}
                                {active && ' …'}
                              </span>
                            </div>
                            <span className="font-mono-tabular text-xs text-[var(--text-secondary)] shrink-0">
                              {completed ? item.meta : '--'}
                            </span>
                          </div>
                        );
                      })}

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                        <button
                          type="button"
                          onClick={() => speakDemoGreeting(selectedLang)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-lime)] hover:underline cursor-pointer"
                        >
                          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>
                            {isSpeaking
                              ? t.playingGreeting(selectedLang)
                              : t.replayGreeting(selectedLang)}
                          </span>
                        </button>
                        <a
                          href="#hear-calls"
                          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-body)] hover:text-[var(--text-primary)]"
                        >
                          <span>{t.hearFullCalls}</span>
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Live Social Proof Ticker Bar */}
        <div
          aria-label="Live merchant activity metrics"
          className="mt-10 sm:mt-12 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] px-5 py-4 sm:px-6"
        >
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:col-span-8">
              <div className="flex items-baseline gap-2.5">
                <span className="text-lg sm:text-xl font-extrabold text-[var(--accent-lime)]">
                  <AnimatedCounter
                    value={processedMillions}
                    decimals={processedMillions === 4.2 ? 1 : 2}
                    prefix="₹"
                    suffix="M"
                  />
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {t.tickerProcessedLabel}
                </span>
              </div>

              <div className="flex items-baseline gap-2.5 sm:border-l sm:border-[var(--border-subtle)] sm:pl-4">
                <span className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                  <AnimatedCounter value={ordersToday} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {t.tickerOrdersLabel}
                </span>
              </div>

              <div className="flex items-baseline gap-2.5 sm:border-l sm:border-[var(--border-subtle)] sm:pl-4">
                <span className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                  <AnimatedCounter value={callsToday} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {t.tickerCallsLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-[var(--border-subtle)] pt-3 text-xs md:col-span-4 md:justify-end md:border-t-0 md:border-l md:border-[var(--border-subtle)] md:pt-0 md:pl-4">
              <TrendingUp className="h-3.5 w-3.5 shrink-0 text-[var(--accent-lime)]" aria-hidden="true" />
              <span className="text-[var(--text-secondary)] shrink-0">{t.tickerRecentPrefix}</span>
              <div className="min-w-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${eventIdx}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block truncate font-mono-tabular text-xs font-medium text-[var(--text-body)]"
                  >
                    {t.tickerEvents[eventIdx % t.tickerEvents.length]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
