import { Moon, PhoneCall } from 'lucide-react';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface NavbarProps {
  lang: SiteLanguage;
  onChangeLang: (lang: SiteLanguage) => void;
  midnightMode: boolean;
  onToggleMidnight: () => void;
  onCallDemoClick: () => void;
}

export function Navbar({
  lang,
  onChangeLang,
  midnightMode,
  onToggleMidnight,
  onCallDemoClick,
}: NavbarProps) {
  const t = SITE_COPY[lang].nav;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas-blur)] backdrop-blur-xl transition-colors duration-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#"
          className="font-display text-xl font-extrabold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-lime)]"
        >
          chttr<span className="text-[var(--accent-lime)]">.</span>
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]"
        >
          <a
            href="#how-it-works"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-4"
          >
            {t.howItWorks}
          </a>
          <a
            href="#hear-calls"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-4"
          >
            {t.hearCalls}
          </a>
          <a
            href="#wallet"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-4"
          >
            {t.wallet}
          </a>
          <a
            href="#roi-math"
            className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-4"
          >
            {t.roiMath}
          </a>
        </nav>

        {/* Zone 3: Midnight Mode Toggle + Global Language Toggle + Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleMidnight}
            aria-pressed={midnightMode}
            aria-label={t.midnightAria}
            title={t.midnightAria}
            className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-2 sm:px-2.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-lime)] cursor-pointer ${
              midnightMode
                ? 'border-[var(--accent-lime)] bg-[var(--accent-lime)]/15 text-[var(--accent-lime)]'
                : 'border-[var(--border-card)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">{t.midnightLabel}</span>
          </button>

          <div
            role="group"
            aria-label="Website language"
            className="inline-flex h-8 items-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-surface)] p-0.5"
          >
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`rounded-md px-2 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`rounded-md px-2 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'hi'
                  ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              हिंदी
            </button>
          </div>

          <button
            type="button"
            onClick={onCallDemoClick}
            className="inline-flex h-8 sm:h-9 items-center gap-1.5 rounded-lg bg-[var(--accent-lime)] px-2.5 sm:px-4 text-xs sm:text-sm font-semibold text-[var(--accent-on-lime)] whitespace-nowrap shrink-0 transition-transform duration-150 hover:bg-[var(--accent-lime-hover)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-lime)] cursor-pointer"
          >
            <PhoneCall className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{t.cta}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
