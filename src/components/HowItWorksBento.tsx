import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  MessageSquare,
  PhoneCall,
  CreditCard,
  Check,
  CheckCheck,
  ArrowUpRight,
} from 'lucide-react';
import hoodieImg from '../assets/images/streetwear_acid_hoodie_1794762266965.jpg';
import reelAdImg from '../assets/images/ig_reel_hoodie_ad_1794763894327.jpg';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface HowItWorksBentoProps {
  lang: SiteLanguage;
}

export function HowItWorksBento({ lang }: HowItWorksBentoProps) {
  const t = SITE_COPY[lang].bento;

  const [waPreviewActive, setWaPreviewActive] = useState(false);
  const [waStep, setWaStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [reelFailed, setReelFailed] = useState(false);
  const isHoveringRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const clearWaTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearWaTimers();
  }, []);

  const startWaSequence = () => {
    clearWaTimers();
    setWaPreviewActive(true);
    setWaStep(1);

    const t1 = window.setTimeout(() => setWaStep(2), 380);
    const t2 = window.setTimeout(() => setWaStep(3), 850);
    const t3 = window.setTimeout(() => setWaStep(4), 1380);
    timersRef.current = [t1, t2, t3];
  };

  const stopWaSequence = () => {
    clearWaTimers();
    setWaPreviewActive(false);
    setWaStep(0);
  };

  return (
    <section id="how-it-works" className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
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
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">{t.subtitle}</p>
        </div>

        {/* Asymmetric 12-Col Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Card 1 */}
          <article className="flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-7 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-xs font-semibold text-[var(--accent-lime)]">
                  {t.c1Tag}
                </span>
                <Globe className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.c1Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{t.c1Desc}</p>
            </div>

            <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tabular text-xs text-[var(--text-body)]">
                <span>storefront.sync(&quot;yourbrand.in&quot;)</span>
                <span className="text-[var(--accent-lime)]">{t.c1Indexed}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {t.c1Stats.map((stat) => (
                  <div key={stat.label} className="border-t border-[var(--border-subtle)] pt-2">
                    <p className="text-[11px] text-[var(--text-secondary)]">{stat.label}</p>
                    <p className="mt-0.5 font-mono-tabular text-xs font-semibold text-[var(--text-primary)]">
                      {stat.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Card 2: Hover Overlay Mock WhatsApp Interface */}
          <article
            tabIndex={0}
            aria-label={t.c2TapPrompt}
            onMouseEnter={() => {
              isHoveringRef.current = true;
              startWaSequence();
            }}
            onMouseLeave={() => {
              isHoveringRef.current = false;
              stopWaSequence();
            }}
            onFocus={startWaSequence}
            onBlur={stopWaSequence}
            onClick={() => {
              if (!waPreviewActive) {
                startWaSequence();
              } else if (!isHoveringRef.current) {
                stopWaSequence();
              }
            }}
            className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--bg-surface)] p-6 sm:p-7 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent-lime)] cursor-pointer lg:col-span-5 ${
              waPreviewActive
                ? 'border-[var(--accent-lime)]'
                : 'border-[var(--border-card)] hover:border-[var(--border-strong)]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-xs font-semibold text-[#FF6B86]">
                  {t.c2Tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)]">
                  <MessageSquare className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
                  <span>{t.c2HoverHint}</span>
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.c2Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{t.c2Desc}</p>
            </div>

            <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
              <div className="flex items-center gap-4">
                {/* Compact 3:4 Instagram Reel Ad Frame */}
                <div className="relative h-24 w-[72px] shrink-0 overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)]">
                  {reelFailed ? (
                    <div className="flex h-full w-full items-center justify-center text-[#FF6B86]">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    </div>
                  ) : (
                    <img
                      src={reelAdImg}
                      alt="Streetwear Instagram Reel ad creative"
                      referrerPolicy="no-referrer"
                      onError={() => setReelFailed(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-1.5 py-1">
                    <span className="block font-mono-tabular text-[9px] font-semibold text-white">
                      IG Reel
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2 text-[var(--text-secondary)]">
                    <span className="truncate">{t.c2Row1}</span>
                    <span className="font-mono-tabular text-[#FF6B86] shrink-0">00:00.0</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[var(--text-primary)]">
                    <span className="truncate">{t.c2Row2}</span>
                    <span className="font-mono-tabular text-[var(--accent-lime)] shrink-0">
                      00:01.2
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[var(--text-secondary)]">
                    <span className="truncate">{t.c2Row3}</span>
                    <span className="font-mono-tabular text-[var(--text-body)] shrink-0">
                      00:02.4
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 text-[11px] text-[var(--text-secondary)]">
                <span>{t.c2TapPrompt}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent-lime)]" aria-hidden="true" />
              </div>
            </div>

            <AnimatePresence>
              {waPreviewActive && (
                <motion.div
                  key="wa-overlay"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-20 flex flex-col justify-between bg-[var(--bg-overlay)] p-5 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-lime)] font-display text-xs font-extrabold text-[var(--accent-on-lime)]">
                        U
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold leading-none text-[var(--text-primary)]">
                          UrbanMonkey Official
                        </p>
                        <p className="mt-1 text-[11px] leading-none text-[var(--accent-lime)]">
                          {waStep === 2 ? 'typing…' : 'WhatsApp Business · 1.2s reply'}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono-tabular text-[11px] font-medium text-[#FF6B86]">
                      {t.c2LiveBadge}
                    </span>
                  </div>

                  <div className="my-auto space-y-2.5 py-2 text-xs">
                    {waStep >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                        className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm border border-[var(--border-subtle)] bg-[#1B1F2A] px-3.5 py-2 text-[#FFFFFF]"
                      >
                        <p className="leading-snug">
                          Clicked your Reel! Acid Wash Hoodie M size stock mein hai kya?
                        </p>
                        <p className="mt-1 text-right font-mono-tabular text-[10px] text-[#D1D5DB]">
                          9:41 PM
                        </p>
                      </motion.div>
                    )}

                    {waStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.14 }}
                        className="mr-auto inline-flex items-center gap-2 rounded-xl rounded-tl-sm bg-[#0D261B] px-3.5 py-2 text-[11px] text-[var(--accent-lime)]"
                      >
                        <span>Chttr AI checking Shopify stock</span>
                        <span className="inline-flex items-center gap-0.5" aria-hidden="true">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              className="h-1 w-1 rounded-full bg-[var(--accent-lime)]"
                              animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: dot * 0.12,
                              }}
                            />
                          ))}
                        </span>
                      </motion.div>
                    )}

                    {waStep >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                        className="mr-auto flex max-w-[92%] items-center gap-2.5 rounded-xl rounded-tl-sm border border-white/10 bg-[#0D261B] px-3 py-2 text-[#F3F4F6]"
                      >
                        {thumbFailed ? (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1A202C] text-[var(--accent-lime)]">
                            <MessageSquare className="h-4 w-4" aria-hidden="true" />
                          </div>
                        ) : (
                          <img
                            src={hoodieImg}
                            alt="Acid Wash Hoodie preview"
                            referrerPolicy="no-referrer"
                            onError={() => setThumbFailed(true)}
                            className="h-11 w-11 shrink-0 rounded-lg object-cover"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="leading-snug">
                            Haan! <span className="font-semibold text-white">Size M</span> (40&quot;
                            boxy fit) ready hai.
                          </p>
                          <div className="mt-1 flex items-center justify-between gap-2 font-mono-tabular text-[10px] text-[var(--accent-lime)]">
                            <span>14 left in stock</span>
                            <span className="inline-flex items-center gap-0.5">
                              9:41 PM <CheckCheck className="h-3 w-3" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {waStep >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                        className="mr-auto flex max-w-[92%] items-center justify-between gap-3 rounded-xl rounded-tl-sm border border-[var(--accent-lime)]/55 bg-[#0D261B] px-3.5 py-2"
                      >
                        <span className="text-[11px] font-medium text-[#FFFFFF]">
                          UPI offer unlocked: Flat ₹150 OFF
                        </span>
                        <span className="font-mono-tabular text-[11px] font-bold text-[var(--accent-lime)] whitespace-nowrap">
                          Pay ₹1,649 →
                        </span>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-2.5 font-mono-tabular text-[10px] text-[var(--text-secondary)]">
                    <span>Synced from IG Reel Ad</span>
                    <span className="text-[var(--accent-lime)]">WhatsApp Cloud API</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-7 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-xs font-semibold text-[#A78BFA]">
                  {t.c3Tag}
                </span>
                <PhoneCall className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.c3Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{t.c3Desc}</p>
            </div>

            <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)]">{t.c3Ring}</span>
                <span className="font-mono-tabular text-[var(--accent-lime)]">{t.c3Latency}</span>
              </div>
              <p className="mt-2.5 text-xs text-[var(--text-body)]">
                Hinglish · Tanglish · Telugu · Marathi · Benglish · English
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-7 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-xs font-semibold text-[var(--accent-lime)]">
                  {t.c4Tag}
                </span>
                <CreditCard className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {t.c4Title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{t.c4Desc}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-3">
              {t.c4Steps.map((step) => (
                <div key={step.label} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-lime)]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{step.label}</p>
                    <p className="text-[11px] text-[var(--text-secondary)]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
