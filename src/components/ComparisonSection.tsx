import { SITE_COPY, SiteLanguage } from '../data/translations';

interface ComparisonSectionProps {
  lang: SiteLanguage;
}

export function ComparisonSection({ lang }: ComparisonSectionProps) {
  const t = SITE_COPY[lang].comparison;

  return (
    <section className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
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

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)]">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--border-card)] text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                <th scope="col" className="px-6 py-4">
                  {t.colDimension}
                </th>
                <th scope="col" className="px-6 py-4">
                  {t.colOld}
                </th>
                <th scope="col" className="px-6 py-4">
                  {t.colHuman}
                </th>
                <th
                  scope="col"
                  className="bg-[var(--accent-lime)]/[0.08] px-6 py-4 text-[var(--accent-lime)]"
                >
                  {t.colChttr}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] text-sm">
              {t.rows.map((row) => (
                <tr key={row.dimension} className="align-top">
                  <th
                    scope="row"
                    className="px-6 py-5 font-display font-semibold text-[var(--text-primary)] whitespace-nowrap"
                  >
                    {row.dimension}
                  </th>
                  <td className="px-6 py-5 text-[var(--text-secondary)]">{row.oldChatbots}</td>
                  <td className="px-6 py-5 text-[var(--text-secondary)]">{row.humanCallCenter}</td>
                  <td className="bg-[var(--accent-lime)]/[0.08] px-6 py-5 font-semibold text-[var(--text-primary)]">
                    {row.chttrAi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
