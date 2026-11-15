import { useState } from 'react';
import { Plus, Minus, User } from 'lucide-react';
import aaravPortrait from '../assets/images/founder_aarav_kicks_1794763893331.jpg';
import meeraPortrait from '../assets/images/founder_meera_glow_1794763893531.jpg';
import kabirPortrait from '../assets/images/founder_kabir_club_1794763894263.jpg';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface TestimonialsAndFaqProps {
  lang: SiteLanguage;
}

const FOUNDER_PORTRAITS: Record<string, string> = {
  aarav: aaravPortrait,
  meera: meeraPortrait,
  kabir: kabirPortrait,
};

export function TestimonialsAndFaq({ lang }: TestimonialsAndFaqProps) {
  const t = SITE_COPY[lang].social;
  const [openFaqId, setOpenFaqId] = useState<string | null>(t.faqs[0].id);
  const [failedPortraits, setFailedPortraits] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-lime)]">
            {t.proofEyebrow}
          </p>
          <h2
            className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]"
            style={{ textWrap: 'balance' }}
          >
            {t.proofHeading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.testimonials.map((item) => {
            const portraitUrl = FOUNDER_PORTRAITS[item.id];
            const imgFailed = failedPortraits[item.id] || !portraitUrl;

            return (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6"
              >
                <div>
                  <p className="font-mono-tabular text-sm font-bold text-[var(--accent-lime)]">
                    {item.primaryMetric}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">{item.secondaryMetric}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-body)]">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-[var(--border-subtle)] pt-4">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)]">
                    {imgFailed ? (
                      <div className="flex h-full w-full items-center justify-center text-[var(--accent-lime)]">
                        <User className="h-5 w-5" aria-hidden="true" />
                      </div>
                    ) : (
                      <img
                        src={portraitUrl}
                        alt={`${item.name}, ${item.role} at ${item.brand}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedPortraits((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="h-full w-full object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-[var(--text-primary)] truncate">
                      {item.name}, {item.age}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] truncate">
                      {item.role} @ {item.brand} · {item.city}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive 5-Question FAQ Accordion */}
        <div id="faq" className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-lime)]">
              {t.faqEyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.faqHeading}
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{t.faqSubtitle}</p>
          </div>

          <div className="divide-y divide-[var(--border-subtle)] rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] lg:col-span-7">
            {t.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="px-5 sm:px-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
                  >
                    <span className="font-display text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                      {faq.question}
                    </span>
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-inset)] text-[var(--text-body)]">
                      {isOpen ? (
                        <Minus
                          className="h-3.5 w-3.5 text-[var(--accent-lime)]"
                          aria-hidden="true"
                        />
                      ) : (
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
