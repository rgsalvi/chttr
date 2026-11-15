import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VoicePlayground } from './components/VoicePlayground';
import { HowItWorksBento } from './components/HowItWorksBento';
import { WalletPricingSection } from './components/WalletPricingSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { FooterAndMobileBar } from './components/FooterAndMobileBar';
import { SiteLanguage } from './data/translations';

const SEO_META: Record<
  SiteLanguage,
  { title: string; description: string; locale: string }
> = {
  en: {
    title: 'Chttr – AI WhatsApp & Voice Sales Bot for Indian D2C',
    description:
      'Turn Instagram ad clicks into paid Shopify orders with instant WhatsApp chat, live Hinglish & Tamil phone calls, and 1-click UPI links.',
    locale: 'en_IN',
  },
  hi: {
    title: 'Chttr – भारतीय D2C के लिए AI WhatsApp और वॉइस सेल्स बॉट',
    description:
      'Instagram एड क्लिक्स को तुरंत WhatsApp चैट, लाइव Hinglish व तमिल फोन कॉल और 1-क्लिक UPI चेकआउट लिंक से पेड Shopify ऑर्डर में बदलें।',
    locale: 'hi_IN',
  },
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function App() {
  const [siteLang, setSiteLang] = useState<SiteLanguage>('en');
  const [midnightMode, setMidnightMode] = useState<boolean>(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = siteLang;
    document.documentElement.classList.toggle('midnight', midnightMode);

    const seo = SEO_META[siteLang];
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname}`;
    const ogImageUrl = `${origin}/og-image.jpg`;

    document.title = seo.title;

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'theme-color', midnightMode ? '#000000' : '#090A0F');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:image', ogImageUrl);
    upsertMeta('property', 'og:locale', seo.locale);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', ogImageUrl);
  }, [siteLang, midnightMode]);

  const handleCallDemoClick = () => {
    const heroEl = document.getElementById('hero-demo');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200">
      <Navbar
        lang={siteLang}
        onChangeLang={setSiteLang}
        midnightMode={midnightMode}
        onToggleMidnight={() => setMidnightMode((prev) => !prev)}
        onCallDemoClick={handleCallDemoClick}
      />
      <main>
        <HeroSection lang={siteLang} phoneInputRef={phoneInputRef} />
        <VoicePlayground lang={siteLang} />
        <HowItWorksBento lang={siteLang} />
        <WalletPricingSection lang={siteLang} />
        <ComparisonSection lang={siteLang} />
        <TestimonialsAndFaq lang={siteLang} />
      </main>
      <FooterAndMobileBar lang={siteLang} onCallDemoClick={handleCallDemoClick} />
    </div>
  );
}
