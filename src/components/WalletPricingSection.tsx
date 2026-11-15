import { useState } from 'react';
import { Check, ArrowRight, X, Wallet } from 'lucide-react';
import { WALLET_TIERS, WalletTier } from '../data/chttrData';
import { SITE_COPY, SiteLanguage } from '../data/translations';

interface WalletPricingSectionProps {
  lang: SiteLanguage;
}

type Currency = 'INR' | 'USD';

const USD_RATE = 83.5;

function formatMoney(amountInr: number, currency: Currency): string {
  if (currency === 'USD') {
    const usd = Math.round(amountInr / USD_RATE);
    return `$${usd.toLocaleString('en-US')}`;
  }
  return `₹${Math.round(amountInr).toLocaleString('en-IN')}`;
}

export function WalletPricingSection({ lang }: WalletPricingSectionProps) {
  const t = SITE_COPY[lang].wallet;

  const [currency, setCurrency] = useState<Currency>('INR');
  const [adClicks, setAdClicks] = useState<number>(3000);
  const [aovInr, setAovInr] = useState<number>(1800);
  const [selectedTier, setSelectedTier] = useState<WalletTier | null>(null);
  const [storeInput, setStoreInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [claimSuccess, setClaimSuccess] = useState(false);

  const recoveredOrders = Math.round(adClicks * 0.09);
  const extraRevenueInr = recoveredOrders * aovInr;
  const perOrderFeeInr = Math.min(200, Math.round(aovInr * 0.03));
  const resolvedInquiries = Math.round(adClicks * 0.08667);
  const walletCostInr = recoveredOrders * perOrderFeeInr + resolvedInquiries * 9;
  const roas = walletCostInr > 0 ? extraRevenueInr / walletCostInr : 0;

  const handleOpenClaim = (tier: WalletTier) => {
    setSelectedTier(tier);
    setClaimSuccess(false);
  };

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeInput.trim() || !emailInput.trim()) return;
    setClaimSuccess(true);
  };

  const selectedTierCopy = selectedTier
    ? t.tiers.find((item) => item.id === selectedTier.id)
    : null;

  return (
    <section id="wallet" className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
              {t.subtitleBeforeZero}{' '}
              <span className="font-mono-tabular font-semibold text-[var(--text-primary)]">
                {currency === 'INR' ? '₹0' : '$0'}
              </span>
              {t.subtitleAfterZero}
            </p>
          </div>

          <div
            role="group"
            aria-label="Pricing currency"
            className="inline-flex self-start rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-1 shrink-0"
          >
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`rounded-lg px-3.5 py-1.5 font-mono-tabular text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                currency === 'INR'
                  ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`rounded-lg px-3.5 py-1.5 font-mono-tabular text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                currency === 'USD'
                  ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Interactive Monthly Profit Calculator */}
        <div
          id="roi-math"
          className="mt-10 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="clicks-slider"
                    className="text-sm font-medium text-[var(--text-body)]"
                  >
                    {t.clicksLabel}
                  </label>
                  <span className="font-mono-tabular text-base font-bold text-[var(--accent-lime)]">
                    {adClicks.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="clicks-slider"
                  type="range"
                  min={500}
                  max={25000}
                  step={500}
                  value={adClicks}
                  onChange={(e) => setAdClicks(Number(e.target.value))}
                  className="chttr-slider mt-3"
                />
                <div className="mt-1.5 flex justify-between font-mono-tabular text-[11px] text-[var(--text-muted)]">
                  <span>500</span>
                  <span>12,500</span>
                  <span>25,000</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="aov-slider"
                    className="text-sm font-medium text-[var(--text-body)]"
                  >
                    {t.aovLabel}
                  </label>
                  <span className="font-mono-tabular text-base font-bold text-[var(--accent-lime)]">
                    {formatMoney(aovInr, currency)}
                  </span>
                </div>
                <input
                  id="aov-slider"
                  type="range"
                  min={800}
                  max={10000}
                  step={100}
                  value={aovInr}
                  onChange={(e) => setAovInr(Number(e.target.value))}
                  className="chttr-slider mt-3"
                />
                <div className="mt-1.5 flex justify-between font-mono-tabular text-[11px] text-[var(--text-muted)]">
                  <span>{formatMoney(800, currency)}</span>
                  <span>{formatMoney(5400, currency)}</span>
                  <span>{formatMoney(10000, currency)}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--border-subtle)] pt-6 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="text-xs font-medium text-[var(--text-secondary)]">
                {t.liftPrefix}
                {recoveredOrders.toLocaleString('en-IN')} {t.liftSuffix}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">{t.extraRevLabel}</p>
                  <p className="mt-1 font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[var(--accent-lime)]">
                    {formatMoney(extraRevenueInr, currency)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--text-secondary)]">{t.walletCostLabel}</p>
                  <p className="mt-1 font-mono-tabular text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {formatMoney(walletCostInr, currency)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--text-secondary)]">{t.netRoiLabel}</p>
                  <p className="mt-1 font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    {roas.toFixed(1)}x{' '}
                    <span className="text-sm font-semibold text-[var(--accent-lime)]">
                      {t.roasLabel}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Prepaid Wallet Tier Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {WALLET_TIERS.map((tier) => {
            const tierCopy = t.tiers.find((item) => item.id === tier.id) ?? t.tiers[0];
            const isPopular = Boolean(tier.popular);
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-2xl border bg-[var(--bg-surface)] p-6 sm:p-7 ${
                  isPopular
                    ? 'border-[var(--accent-lime)] shadow-[0_0_40px_-18px_rgba(37,244,106,0.35)]'
                    : 'border-[var(--border-card)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                      {tierCopy.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold ${
                        isPopular ? 'text-[var(--accent-lime)]' : 'text-[var(--text-secondary)]'
                      }`}
                    >
                      {tierCopy.tagline}
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-mono-tabular text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                      {formatMoney(tier.minTopUpInr, currency)}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">{t.minTopUp}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-y border-[var(--border-subtle)] py-3 font-mono-tabular text-xs">
                    <span className="text-[var(--text-secondary)]">{t.checkoutFeeLabel}</span>
                    <span className="font-bold text-[var(--accent-lime)]">
                      {tier.checkoutFeePct}% ({t.capLabel}{' '}
                      {formatMoney(tier.capPerOrderInr, currency)})
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm text-[var(--text-body)]">
                    {tierCopy.features.map((feat) => {
                      const displayFeat =
                        currency === 'USD'
                          ? feat
                              .replace('₹250', formatMoney(250, 'USD'))
                              .replace('₹200', formatMoney(200, 'USD'))
                              .replace('₹150', formatMoney(150, 'USD'))
                              .replace('₹12', '$0.15')
                              .replace('₹9', '$0.11')
                              .replace('₹7', '$0.08')
                              .replace('₹0', '$0')
                          : feat;
                      return (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-lime)]"
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{displayFeat}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenClaim(tier)}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-colors duration-150 cursor-pointer ${
                    isPopular
                      ? 'bg-[var(--accent-lime)] text-[var(--accent-on-lime)] hover:bg-[var(--accent-lime-hover)]'
                      : 'border border-[var(--border-strong)] bg-[var(--bg-inset)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)]'
                  }`}
                >
                  <span>{currency === 'USD' ? tierCopy.ctaUsd : tierCopy.ctaInr}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wallet Claim Modal */}
      {selectedTier && selectedTierCopy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wallet-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedTier(null)}
              aria-label="Close wallet dialog"
              className="absolute top-4 right-4 rounded-lg p-1.5 text-[var(--text-secondary)] hover:bg-white/10 hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2.5 text-[var(--accent-lime)]">
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {selectedTierCopy.name}
              </span>
            </div>

            <h3
              id="wallet-modal-title"
              className="mt-2 font-display text-xl font-bold text-[var(--text-primary)]"
            >
              {claimSuccess
                ? t.modalSuccessTitle
                : `${t.modalClaimPrefix} ${formatMoney(selectedTier.bonusCreditInr, currency)} ${t.modalClaimSuffix}`}
            </h3>

            {claimSuccess ? (
              <div className="mt-4 space-y-4">
                <p className="text-sm leading-relaxed text-[var(--text-body)]">
                  {lang === 'hi' ? (
                    <>
                      हमने <span className="text-[var(--text-primary)]">{storeInput}</span> के लिए
                      1-क्लिक Shopify इंस्टॉल लिंक और{' '}
                      <span className="font-mono-tabular font-semibold text-[var(--accent-lime)]">
                        {formatMoney(selectedTier.bonusCreditInr, currency)}
                      </span>{' '}
                      बोनस वाउचर <span className="text-[var(--text-primary)]">{emailInput}</span>{' '}
                      पर भेज दिया है।
                    </>
                  ) : (
                    <>
                      We&apos;ve sent your 1-click Shopify App install link and{' '}
                      <span className="font-mono-tabular font-semibold text-[var(--accent-lime)]">
                        {formatMoney(selectedTier.bonusCreditInr, currency)}
                      </span>{' '}
                      bonus credit voucher for{' '}
                      <span className="text-[var(--text-primary)]">{storeInput}</span> to{' '}
                      <span className="text-[var(--text-primary)]">{emailInput}</span>.
                    </>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedTier(null)}
                  className="w-full rounded-xl bg-[var(--accent-lime)] py-3 text-sm font-bold text-[var(--accent-on-lime)] hover:bg-[var(--accent-lime-hover)] cursor-pointer"
                >
                  {t.modalDone}
                </button>
              </div>
            ) : (
              <form onSubmit={handleClaimSubmit} className="mt-4 space-y-4">
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {lang === 'hi'
                    ? `UPI या कॉर्पोरेट कार्ड से ${formatMoney(selectedTier.minTopUpInr, currency)} प्रीपेड बैलेंस के साथ शुरू करें। अधूरी चैट पर ₹0 शुल्क।`
                    : `Start with ${formatMoney(selectedTier.minTopUpInr, currency)} prepaid balance via UPI or Corporate Card. Pay ₹0 for abandoned chats.`}
                </p>
                <div>
                  <label
                    htmlFor="claim-store"
                    className="block text-xs font-medium text-[var(--text-body)]"
                  >
                    {t.modalStoreLabel}
                  </label>
                  <input
                    id="claim-store"
                    type="text"
                    required
                    value={storeInput}
                    onChange={(e) => setStoreInput(e.target.value)}
                    placeholder="yourbrand.myshopify.com"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-lime)] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="claim-email"
                    className="block text-xs font-medium text-[var(--text-body)]"
                  >
                    {t.modalEmailLabel}
                  </label>
                  <input
                    id="claim-email"
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="founder@yourbrand.in"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-inset)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-lime)] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--accent-lime)] py-3 text-sm font-bold text-[var(--accent-on-lime)] hover:bg-[var(--accent-lime-hover)] cursor-pointer"
                >
                  {t.modalSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
