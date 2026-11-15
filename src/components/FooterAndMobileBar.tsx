import { PhoneCall } from 'lucide-react';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface FooterAndMobileBarProps {
  lang: SiteLanguage;
  onCallDemoClick: () => void;
}

export function FooterAndMobileBar({ lang, onCallDemoClick }: FooterAndMobileBarProps) {
  const navCopy = SITE_COPY[lang].nav;
  const t = SITE_COPY[lang].footer;

  return (
    <>
      <footer className="bg-[var(--bg-canvas)] pb-24 pt-12 md:pb-12 transition-colors duration-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <a
              href="#"
              className="font-display text-xl font-extrabold tracking-tight text-[var(--text-primary)]"
            >
              chttr<span className="text-[var(--accent-lime)]">.</span>
            </a>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)]">{t.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--text-secondary)]">
            <a href="#how-it-works" className="hover:text-[var(--text-primary)]">
              {navCopy.howItWorks}
            </a>
            <a href="#hear-calls" className="hover:text-[var(--text-primary)]">
              {navCopy.hearCalls}
            </a>
            <a href="#wallet" className="hover:text-[var(--text-primary)]">
              {navCopy.wallet}
            </a>
            <a href="#roi-math" className="hover:text-[var(--text-primary)]">
              {navCopy.roiMath}
            </a>
            <a href="mailto:hello@chttrbot.com" className="hover:text-[var(--text-primary)]">
              hello@chttrbot.com
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[var(--border-subtle)] px-4 pt-6 text-xs text-[var(--text-muted)] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Gilded Technologies Pvt. Ltd. {t.rights}
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA Bar (< 15% viewport height combined with header) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border-card)] bg-[var(--bg-canvas-blur)] px-4 py-2.5 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={onCallDemoClick}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-lime)] px-4 py-2.5 text-sm font-bold text-[var(--accent-on-lime)] active:scale-[0.99] cursor-pointer"
        >
          <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t.mobileCta}</span>
        </button>
      </div>
    </>
  );
}
