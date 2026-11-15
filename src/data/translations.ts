export type SiteLanguage = 'en' | 'hi';

export interface SiteCopy {
  nav: {
    howItWorks: string;
    hearCalls: string;
    wallet: string;
    roiMath: string;
    cta: string;
    midnightLabel: string;
    midnightAria: string;
  };
  hero: {
    kickerBrand: string;
    kickerFounders: string;
    kickerHumans: string;
    h1: string;
    subtitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    trust1: string;
    trust2: string;
    trust3: string;
    cardTitle: string;
    cardSubtitle: string;
    reset: string;
    step1Label: string;
    step1Placeholder: string;
    step2Label: string;
    useDemoNumber: string;
    phoneError: string;
    step3Label: string;
    submitCta: string;
    simStep1: (store: string) => string;
    simStep2: (phone: string) => string;
    simStep3: (lang: string) => string;
    simStep4: string;
    readyLabel: string;
    replayGreeting: (lang: string) => string;
    playingGreeting: (lang: string) => string;
    hearFullCalls: string;
    tickerProcessedLabel: string;
    tickerOrdersLabel: string;
    tickerCallsLabel: string;
    tickerRecentPrefix: string;
    tickerEvents: string[];
  };
  voice: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    audioOn: string;
    muted: string;
    cartTitle: string;
    orderConfirmed: string;
    syncing: string;
    eventsTitle: string;
    outcomeNote: string;
    deductionSuffix: string;
  };
  bento: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    c1Tag: string;
    c1Title: string;
    c1Desc: string;
    c1Indexed: string;
    c1Stats: { label: string; val: string }[];
    c2Tag: string;
    c2HoverHint: string;
    c2LiveBadge: string;
    c2Title: string;
    c2Desc: string;
    c2Row1: string;
    c2Row2: string;
    c2Row3: string;
    c2TapPrompt: string;
    c3Tag: string;
    c3Title: string;
    c3Desc: string;
    c3Ring: string;
    c3Latency: string;
    c4Tag: string;
    c4Title: string;
    c4Desc: string;
    c4Steps: { label: string; detail: string }[];
  };
  wallet: {
    eyebrow: string;
    heading: string;
    subtitleBeforeZero: string;
    subtitleAfterZero: string;
    clicksLabel: string;
    aovLabel: string;
    liftPrefix: string;
    liftSuffix: string;
    extraRevLabel: string;
    walletCostLabel: string;
    netRoiLabel: string;
    roasLabel: string;
    minTopUp: string;
    checkoutFeeLabel: string;
    capLabel: string;
    tiers: {
      id: 'starter' | 'growth' | 'scale';
      name: string;
      tagline: string;
      features: string[];
      ctaInr: string;
      ctaUsd: string;
    }[];
    modalSuccessTitle: string;
    modalClaimPrefix: string;
    modalClaimSuffix: string;
    modalDone: string;
    modalStoreLabel: string;
    modalEmailLabel: string;
    modalSubmit: string;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    colDimension: string;
    colOld: string;
    colHuman: string;
    colChttr: string;
    rows: {
      dimension: string;
      oldChatbots: string;
      humanCallCenter: string;
      chttrAi: string;
    }[];
  };
  social: {
    proofEyebrow: string;
    proofHeading: string;
    testimonials: {
      id: string;
      name: string;
      age: number;
      role: string;
      brand: string;
      city: string;
      primaryMetric: string;
      secondaryMetric: string;
      quote: string;
    }[];
    faqEyebrow: string;
    faqHeading: string;
    faqSubtitle: string;
    faqs: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
  footer: {
    tagline: string;
    rights: string;
    mobileCta: string;
  };
}

export const SITE_COPY: Record<SiteLanguage, SiteCopy> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      hearCalls: 'Hear Live Calls',
      wallet: 'Prepaid Wallet',
      roiMath: 'ROI Math',
      cta: 'Call My Phone Now',
      midnightLabel: 'Midnight',
      midnightAria: 'Toggle high-contrast True Black Midnight Mode',
    },
    hero: {
      kickerBrand: 'Built for Indian D2C',
      kickerFounders: 'Used by 180+ Gen Z Shopify Founders',
      kickerHumans: '0 Humans Needed',
      h1: 'Stop Losing Instagram Ad Clicks in Dead WhatsApp Chats.',
      subtitle:
        'Chttr learns your entire Shopify store in 60 seconds, chats with shoppers on WhatsApp, calls their phone live in Hinglish or Tamil when they hesitate, and drops a 1-click payment link that actually closes the sale.',
      stat1Label: 'Live outbound call speed',
      stat2Label: 'Indian languages mid-call',
      stat3Label: 'Fee on abandoned chats',
      trust1: 'Free ₹2,000 Wallet Credit on Signup',
      trust2: 'Pay ₹0 for Abandoned Chats',
      trust3: '2-Min Shopify Plug & Play',
      cardTitle: 'Test Chttr on Your Own Phone',
      cardSubtitle: 'Trigger a live WhatsApp + AI voice call flow in 5 seconds.',
      reset: 'Reset',
      step1Label: '1. Your Store URL',
      step1Placeholder: 'e.g., urbanmonkey.com or leave blank for demo store',
      step2Label: '2. Your WhatsApp Number',
      useDemoNumber: 'Use demo number',
      phoneError: 'Enter a valid 10-digit Indian mobile number starting with 6–9.',
      step3Label: '3. Pick Call Language',
      submitCta: 'Send Me a WhatsApp & Call Me in 5 Secs',
      simStep1: (store) => `Scraped 42 products & return policies from ${store}`,
      simStep2: (phone) => `Sent WhatsApp greeting to +91 ${phone}`,
      simStep3: (lang) => `Calling your phone now in ${lang} (Sarvam + Bolna Voice Engine)`,
      simStep4: '1-Click ₹1,499 Shopify Checkout Link pushed to WhatsApp',
      readyLabel: 'Ready',
      replayGreeting: (lang) => `Replay ${lang} voice greeting`,
      playingGreeting: (lang) => `Playing ${lang} voice greeting…`,
      hearFullCalls: 'Hear full sales calls',
      tickerProcessedLabel: 'processed this week',
      tickerOrdersLabel: 'orders closed today',
      tickerCallsLabel: 'live AI calls today',
      tickerRecentPrefix: 'Latest:',
      tickerEvents: [
        'UrbanMonkey · ₹1,649 UPI closed 12s ago',
        'GlowTheory · ₹1,199 GPay closed 19s ago',
        'KicksCulture · ₹8,499 Snapmint closed 28s ago',
      ],
    },
    voice: {
      eyebrow: 'Live Multilingual Voice Engine',
      heading: 'Hear Chttr Close Real Sales in Indian Languages',
      subtitle:
        'Switch scenarios below and press play to inspect how Chttr handles code-switching, answers tough sizing or ingredient doubts, and flips hesitant COD shoppers to paid UPI orders.',
      audioOn: 'Audio On',
      muted: 'Muted',
      cartTitle: 'Live Shopify Cart State',
      orderConfirmed: 'Order Confirmed',
      syncing: 'Syncing…',
      eventsTitle: 'Automated Cart & Checkout Events',
      outcomeNote: 'Outcome fee at 3% (Growth)',
      deductionSuffix: 'wallet deduction',
    },
    bento: {
      eyebrow: '4-Step Revenue Loop',
      heading: 'How Chttr Prints Money for Your Brand',
      subtitle: 'Zero manual flowcharts, zero call center hiring, and zero wasted Meta ad clicks.',
      c1Tag: '01. Store Intelligence',
      c1Title: 'Auto-Scrapes Your Website in 60s.',
      c1Desc:
        'Paste your Shopify link. Chttr reads every product, variant, live stock count, size chart, and return policy automatically. Zero manual flowchart building.',
      c1Indexed: '148 SKUs Indexed',
      c1Stats: [
        { label: 'Size Charts', val: 'Synced' },
        { label: 'Live Inventory', val: 'Real-time' },
        { label: 'Return Policy', val: '7-Day Verified' },
        { label: 'Coupon Rules', val: 'Locked' },
      ],
      c2Tag: '02. Click-to-WhatsApp',
      c2HoverHint: 'Hover for chat',
      c2LiveBadge: 'Live Preview',
      c2Title: 'Catches Every Instagram Ad Click on WhatsApp.',
      c2Desc:
        'Shoppers tap your Reel ad and land in WhatsApp. Chttr replies in 1.2 seconds with product photos and answers tough questions like a pro.',
      c2Row1: 'Instagram Reel Ad Tap',
      c2Row2: 'WhatsApp reply + size guide sent',
      c2Row3: '1-click UPI checkout link dropped',
      c2TapPrompt: 'Hover or tap card to watch WhatsApp flow',
      c3Tag: '03. Instant Voice Recovery',
      c3Title: 'Calls Their Phone When They Hesitate.',
      c3Desc:
        'High cart value but ghosting on text? Or shopper taps "Call Me"? Chttr rings their mobile in 3 seconds and speaks their language—Hinglish, Tamil, Telugu, Marathi, Bengali, or English.',
      c3Ring: 'Outbound +91 Ring',
      c3Latency: '3.0s Latency',
      c4Tag: '04. 1-Click Checkout',
      c4Title: 'Sends 1-Click Pre-Filled Shopify Checkout.',
      c4Desc:
        'No typing addresses on tiny screens. Chttr builds their cart, applies the right coupon, and drops a 1-click payment link right into WhatsApp. Gets smarter after every sale.',
      c4Steps: [
        { label: 'Variant + Quantity', detail: 'Pre-selected from call' },
        { label: 'PREPAID150 Applied', detail: 'Auto-flips COD to UPI' },
        { label: 'Shopify Order Synced', detail: 'Instant GPay / PhonePe' },
      ],
    },
    wallet: {
      eyebrow: 'Outcome-Based Prepaid Wallet',
      heading: 'Kill Monthly SaaS Subscriptions. Only Pay When Chttr Delivers.',
      subtitleBeforeZero:
        "Works just like a Swiggy or Uber wallet. Top up with UPI or Card. If a shopper chats for 10 minutes or talks on a call and doesn't buy? You pay",
      subtitleAfterZero: '.',
      clicksLabel: 'Monthly Instagram Ad Clicks to WhatsApp',
      aovLabel: 'Your Average Order Value',
      liftPrefix: 'Estimated Monthly Lift on Growth Wallet (',
      liftSuffix: 'extra paid orders)',
      extraRevLabel: 'Extra Monthly Revenue Unlocked',
      walletCostLabel: 'Your Wallet Cost',
      netRoiLabel: 'Net ROI',
      roasLabel: 'ROAS',
      minTopUp: 'Min Wallet Top-Up',
      checkoutFeeLabel: 'Completed Checkout Fee',
      capLabel: 'Cap',
      tiers: [
        {
          id: 'starter',
          name: 'Starter Wallet',
          tagline: 'For New Drops',
          features: [
            '4% per completed checkout (capped at max ₹250 per order)',
            '₹12 per resolved support inquiry with zero humans needed',
            '₹0 for abandoned chats & unclosed voice calls (first 90s free)',
            '60-second Shopify catalog, variant & policy sync',
          ],
          ctaInr: 'Load ₹4,500 & Get ₹2,000 Bonus Credit',
          ctaUsd: 'Load $55 & Get $24 Bonus Credit',
        },
        {
          id: 'growth',
          name: 'Growth Wallet',
          tagline: 'Most Popular',
          features: [
            '3% per completed checkout (capped at max ₹200 per order)',
            '₹9 per resolved support inquiry across WhatsApp & Voice',
            '10+ Indian languages on live voice + auto COD-to-Prepaid upsell',
            '1-click pre-filled Shopify checkout links with smart coupons',
          ],
          ctaInr: 'Start Growth Wallet + ₹3,500 Free Credit',
          ctaUsd: 'Start Growth Wallet + $42 Free Credit',
        },
        {
          id: 'scale',
          name: 'Scale Wallet',
          tagline: 'For High-Volume D2C',
          features: [
            '2% per completed checkout (capped at max ₹150 per order)',
            '₹7 per resolved support inquiry at peak drop concurrency',
            'Dedicated +91 Brand Caller ID & custom brand voice cloning',
            'Priority Meta Click-to-WhatsApp attribution & NDR recovery',
          ],
          ctaInr: 'Claim Scale Wallet',
          ctaUsd: 'Claim Scale Wallet',
        },
      ],
      modalSuccessTitle: 'Bonus Credit Reserved!',
      modalClaimPrefix: 'Claim',
      modalClaimSuffix: 'Free Credit',
      modalDone: 'Done',
      modalStoreLabel: 'Shopify Store URL',
      modalEmailLabel: 'Founder Work Email',
      modalSubmit: 'Continue to Shopify Connect',
    },
    comparison: {
      eyebrow: 'Side-by-Side Reality Check',
      heading: 'Old Boring Chatbots vs. Chttr',
      subtitle:
        'Why 180+ D2C founders ditched drag-and-drop button trees and fixed-salary call centers.',
      colDimension: 'Dimension',
      colOld: 'Old WhatsApp Chatbots (Wati / Interakt)',
      colHuman: 'Human Call Center Agents',
      colChttr: 'Chttr AI',
      rows: [
        {
          dimension: 'Setup Time',
          oldChatbots: '2 weeks of drag-and-drop flowcharts',
          humanCallCenter: '3 weeks hiring & script training',
          chttrAi: '60-second Shopify URL scrape',
        },
        {
          dimension: 'When Shopper Wants to Talk',
          oldChatbots: '"Sorry, press 1 or wait 4 hours"',
          humanCallCenter: 'Busy lines or off-duty after 7 PM',
          chttrAi: 'Instant 24/7 outbound phone call in 3 seconds',
        },
        {
          dimension: 'Languages',
          oldChatbots: 'Rigid English button templates',
          humanCallCenter: '1–2 languages per rep',
          chttrAi: 'Fluid Hinglish, Tanglish & 22 Indian languages on the fly',
        },
        {
          dimension: 'Pricing Model',
          oldChatbots: 'Charges you for every spam message',
          humanCallCenter: '₹25,000/mo fixed salary per rep',
          chttrAi: 'Outcome Wallet (Pay % only when you make a sale)',
        },
      ],
    },
    social: {
      proofEyebrow: 'Founder Proof',
      proofHeading: 'Built for Speed-Obsessed Indian D2C Founders',
      testimonials: [
        {
          id: 'aarav',
          name: 'Aarav Mehta',
          age: 24,
          role: 'Founder',
          brand: 'KicksCulture',
          city: 'Mumbai',
          primaryMetric: '+34% WhatsApp-to-Prepaid conversion in 14 days',
          secondaryMetric: 'Saved ₹75,000/month on NDR & call center reps',
          quote:
            'Sneaker buyers always have legitimacy and sizing anxiety before dropping ₹8k+. Chttr rings them in 3 seconds in clean Mumbai Hindi+English, verifies our NFC tag policy, and closes on UPI before they scroll back to Reels.',
        },
        {
          id: 'meera',
          name: 'Meera Nair',
          age: 26,
          role: 'Co-founder',
          brand: 'GlowTheory India',
          city: 'Chennai',
          primaryMetric: '+41% Bundle AOV lift via Tanglish voice calls',
          secondaryMetric: '₹3.2L/mo recovered from abandoned reel clicks',
          quote:
            'Shoppers from Tamil Nadu and Kerala hated rigid English WhatsApp bots. Hearing Chttr explain niacinamide routines in natural Tanglish and drop a GPay link inside WhatsApp doubled our ROAS overnight.',
        },
        {
          id: 'kabir',
          name: 'Kabir Verma',
          age: 23,
          role: 'Founder',
          brand: 'OversizedClub',
          city: 'Delhi NCR',
          primaryMetric: '68% COD-to-Prepaid flip rate during drops',
          secondaryMetric: '0 human callers hired across 10,000+ orders',
          quote:
            'Every drop night used to leave 400 unanswered Instagram DMs and high RTO on COD. Chttr calls hesitant buyers immediately, suggests the right boxy fit, and offers ₹150 off to pay via UPI right now.',
        },
      ],
      faqEyebrow: 'Straight Answers',
      faqHeading: 'Questions Founders Ask Before Connecting Shopify',
      faqSubtitle:
        'No enterprise fluff. Here is exactly how the voice engine, Shopify price locks, and prepaid wallet billing work in production.',
      faqs: [
        {
          id: 'faq-1',
          question: 'Wait—does Chttr really call my customer on a normal phone call?',
          answer:
            'Yes. When a shopper hesitates on WhatsApp, asks a complex sizing question, or taps "Call Me", Chttr triggers a real PSTN +91 outbound mobile call to their phone within 3 seconds—no app download or VoIP link required. Once the call wraps, Chttr drops their pre-filled Shopify cart link right back in their WhatsApp chat.',
        },
        {
          id: 'faq-2',
          question: 'How does it switch between Hindi, English, Tamil, or Marathi mid-call?',
          answer:
            'Our voice pipeline combines Indian-tuned speech recognition and low-latency multilingual synthesis (powered by Sarvam + Bolna). It detects code-switching automatically on every turn—so if a customer starts in English and switches to Hinglish or Tanglish mid-sentence, Chttr matches their exact dialect without awkward pauses.',
        },
        {
          id: 'faq-3',
          question: 'What if the AI hallucinates a fake discount or wrong price?',
          answer:
            'Impossible by design. Chttr uses a strict deterministic Shopify catalog and checkout lock. Prices, inventory counts, return windows, and coupon codes are read directly from your Shopify Storefront & Admin APIs—the voice model cannot invent discounts or generate checkout links outside your pre-approved promo rules.',
        },
        {
          id: 'faq-4',
          question: 'Do I really pay ₹0 if a customer chats and abandons their cart?',
          answer:
            'Yes. Unlike legacy WhatsApp BSPs that bill you per conversation window regardless of outcome, Chttr works on an Outcome Prepaid Wallet. If a shopper chats for 10 minutes or talks on a voice call (first 90 seconds free) and leaves without buying or resolving a verified ticket, ₹0 is deducted from your wallet.',
        },
        {
          id: 'faq-5',
          question: 'How fast can I connect my Shopify store and Meta Ads?',
          answer:
            'Under 2 minutes. Paste your Shopify store URL, authorize the 1-click Shopify app, and connect your Click-to-WhatsApp Meta Ad number. Chttr scrapes your products, size charts, and policies in 60 seconds and is ready to close live orders immediately.',
        },
      ],
    },
    footer: {
      tagline: 'AI WhatsApp & Outbound Voice Sales Engine for Indian D2C Brands · chttrbot.com',
      rights: 'All rights reserved.',
      mobileCta: 'Get a Live Call Demo',
    },
  },
  hi: {
    nav: {
      howItWorks: 'कैसे काम करता है',
      hearCalls: 'लाइव कॉल्स सुनें',
      wallet: 'प्रीपेड वॉलेट',
      roiMath: 'ROI गणित',
      cta: 'अभी कॉल करें',
      midnightLabel: 'मिडनाइट',
      midnightAria: 'हाई-कंट्रास्ट ट्रू ब्लैक मिडनाइट मोड बदलें',
    },
    hero: {
      kickerBrand: 'भारतीय D2C के लिए निर्मित',
      kickerFounders: '180+ Gen Z Shopify फाउंडर्स की पसंद',
      kickerHumans: '0 ह्यूमन टीम की ज़रूरत',
      h1: 'Dead WhatsApp चैट्स में Instagram एड क्लिक्स खोना बंद करें।',
      subtitle:
        'Chttr 60 सेकंड में आपका पूरा Shopify स्टोर सीख लेता है, WhatsApp पर खरीदारों से बात करता है, हिचकिचाने पर Hinglish या तमिल में तुरंत लाइव फोन कॉल करता है, और 1-क्लिक पेमेंट लिंक भेजकर ऑर्डर क्लोज़ करता है।',
      stat1Label: 'लाइव आउटबाउंड कॉल स्पीड',
      stat2Label: 'कॉल के बीच भारतीय भाषाएं',
      stat3Label: 'अधूरी चैट पर शुल्क',
      trust1: 'साइनअप पर ₹2,000 फ्री वॉलेट क्रेडिट',
      trust2: 'अधूरी चैट पर ₹0 चार्ज',
      trust3: '2-मिनट में Shopify प्लग एंड प्ले',
      cardTitle: 'अपने फोन पर Chttr टेस्ट करें',
      cardSubtitle: '5 सेकंड में लाइव WhatsApp + AI वॉइस कॉल डेमो पाएं।',
      reset: 'रीसेट',
      step1Label: '1. आपके स्टोर का URL',
      step1Placeholder: 'जैसे urbanmonkey.com (या डेमो स्टोर के लिए खाली छोड़ें)',
      step2Label: '2. आपका WhatsApp नंबर',
      useDemoNumber: 'डेमो नंबर भरें',
      phoneError: 'कृपया 6–9 से शुरू होने वाला सही 10-अंकों का मोबाइल नंबर डालें।',
      step3Label: '3. कॉल की भाषा चुनें',
      submitCta: '5 सेकंड में WhatsApp और लाइव कॉल पाएं',
      simStep1: (store) => `${store} से 42 प्रोडक्ट्स और रिटर्न पॉलिसी स्कैन हुईं`,
      simStep2: (phone) => `+91 ${phone} पर WhatsApp मैसेज भेजा गया`,
      simStep3: (lang) => `${lang} में आपके फोन पर लाइव कॉल जा रही है (Sarvam + Bolna वॉइस इंजन)`,
      simStep4: '1-क्लिक ₹1,499 Shopify चेकआउट लिंक WhatsApp पर भेजा गया',
      readyLabel: 'तैयार',
      replayGreeting: (lang) => `${lang} वॉइस ग्रीटिंग दोबारा सुनें`,
      playingGreeting: (lang) => `${lang} वॉइस ग्रीटिंग चल रही है…`,
      hearFullCalls: 'पूरी सेल्स कॉल्स सुनें',
      tickerProcessedLabel: 'इस हफ्ते प्रोसेस्ड',
      tickerOrdersLabel: 'आज ऑर्डर क्लोज़ हुए',
      tickerCallsLabel: 'आज लाइव AI कॉल्स',
      tickerRecentPrefix: 'ताज़ा ऑर्डर:',
      tickerEvents: [
        'UrbanMonkey · ₹1,649 UPI 12 सेकंड पहले क्लोज़',
        'GlowTheory · ₹1,199 GPay 19 सेकंड पहले क्लोज़',
        'KicksCulture · ₹8,499 Snapmint 28 सेकंड पहले क्लोज़',
      ],
    },
    voice: {
      eyebrow: 'लाइव बहुभाषी वॉइस इंजन',
      heading: 'सुनें Chttr कैसे भारतीय भाषाओं में असली सेल्स क्लोज़ करता है',
      subtitle:
        'नीचे भाषा चुनें और प्ले दबाकर देखें कि Chttr कैसे नैचुरल कोड-स्विचिंग के साथ साइज़ व प्रोडक्ट डाउट्स दूर करता है और COD ग्राहकों को प्रीपेड UPI ऑर्डर में बदलता है।',
      audioOn: 'आवाज़ चालू',
      muted: 'म्यूट',
      cartTitle: 'लाइव Shopify कार्ट स्टेटस',
      orderConfirmed: 'ऑर्डर कन्फर्म',
      syncing: 'सिंक हो रहा है…',
      eventsTitle: 'ऑटोमैटिक कार्ट और चेकआउट इवेंट्स',
      outcomeNote: '3% आउटकम शुल्क (Growth)',
      deductionSuffix: 'वॉलेट कटौती',
    },
    bento: {
      eyebrow: '4-स्टेप रेवेन्यू लूप',
      heading: 'Chttr आपके ब्रांड के लिए मुनाफा कैसे कमाता है',
      subtitle: 'न कोई मैनुअल फ्लोचार्ट, न कॉल सेंटर की भर्ती, और न बर्बाद Meta एड क्लिक्स।',
      c1Tag: '01. स्टोर इंटेलिजेंस',
      c1Title: '60 सेकंड में पूरी वेबसाइट स्कैन।',
      c1Desc:
        'बस अपना Shopify लिंक पेस्ट करें। Chttr हर प्रोडक्ट, वैरिएंट, लाइव स्टॉक, साइज़ चार्ट और रिटर्न पॉलिसी अपने आप पढ़ लेता है।',
      c1Indexed: '148 SKUs इंडेक्स्ड',
      c1Stats: [
        { label: 'साइज़ चार्ट', val: 'सिंक्ड' },
        { label: 'लाइव इन्वेंट्री', val: 'रियल-टाइम' },
        { label: 'रिटर्न पॉलिसी', val: '7-दिन वेरिफाइड' },
        { label: 'कूपन नियम', val: 'लॉक्ड' },
      ],
      c2Tag: '02. क्लिक-टू-WhatsApp',
      c2HoverHint: 'चैट देखने के लिए होवर करें',
      c2LiveBadge: 'लाइव प्रीव्यू',
      c2Title: 'हर Instagram एड क्लिक को WhatsApp पर पकड़ता है।',
      c2Desc:
        'ग्राहक आपकी Reel एड पर टैप कर WhatsApp पर आते हैं। Chttr 1.2 सेकंड में प्रोडक्ट फोटो और सही जवाब के साथ रिप्लाई करता है।',
      c2Row1: 'Instagram Reel एड टैप',
      c2Row2: 'WhatsApp रिप्लाई + साइज़ गाइड भेजा गया',
      c2Row3: '1-क्लिक UPI चेकआउट लिंक ड्रॉप हुआ',
      c2TapPrompt: 'लाइव WhatsApp फ्लो देखने के लिए कार्ड पर होवर या टैप करें',
      c3Tag: '03. तुरंत वॉइस रिकवरी',
      c3Title: 'ग्राहक के हिचकिचाने पर तुरंत फोन कॉल।',
      c3Desc:
        'बड़ा कार्ट है पर चैट पर रिप्लाई नहीं? या ग्राहक ने "Call Me" दबाया? Chttr 3 सेकंड में कॉल करता है और उनकी भाषा—Hinglish, तमिल, तेलुगु, मराठी या बंगाली में बात करता है।',
      c3Ring: 'आउटबाउंड +91 रिंग',
      c3Latency: '3.0s लेटेंसी',
      c4Tag: '04. 1-क्लिक चेकआउट',
      c4Title: '1-क्लिक प्री-फिल्ड Shopify चेकआउट भेजता है।',
      c4Desc:
        'छोटी स्क्रीन पर पता टाइप करने की झंझट खत्म। Chttr कार्ट बनाता है, सही कूपन लगाता है और WhatsApp में ही 1-क्लिक पेमेंट लिंक देता है।',
      c4Steps: [
        { label: 'वैरिएंट + क्वांटिटी', detail: 'कॉल से प्री-सिलेक्टेड' },
        { label: 'PREPAID150 लागू', detail: 'COD से UPI में बदलाव' },
        { label: 'Shopify ऑर्डर सिंक्ड', detail: 'तुरंत GPay / PhonePe' },
      ],
    },
    wallet: {
      eyebrow: 'रिजल्ट-आधारित प्रीपेड वॉलेट',
      heading: 'महीने के SaaS सब्सक्रिप्शन बंद करें। सिर्फ ऑर्डर मिलने पर पे करें।',
      subtitleBeforeZero:
        'बिल्कुल Swiggy या Uber वॉलेट जैसा। UPI या कार्ड से टॉप-अप करें। अगर ग्राहक 10 मिनट चैट या कॉल पर बात करके भी न खरीदे? तो आप देते हैं',
      subtitleAfterZero: '।',
      clicksLabel: 'महीने में WhatsApp पर आने वाले Instagram एड क्लिक्स',
      aovLabel: 'आपकी औसत ऑर्डर वैल्यू (AOV)',
      liftPrefix: 'Growth वॉलेट पर अनुमानित मासिक बढ़त (',
      liftSuffix: 'अतिरिक्त पेड ऑर्डर)',
      extraRevLabel: 'अतिरिक्त मासिक रेवेन्यू',
      walletCostLabel: 'आपका वॉलेट खर्च',
      netRoiLabel: 'नेट ROI',
      roasLabel: 'ROAS',
      minTopUp: 'न्यूनतम वॉलेट टॉप-अप',
      checkoutFeeLabel: 'सफल चेकआउट शुल्क',
      capLabel: 'अधिकतम सीमा',
      tiers: [
        {
          id: 'starter',
          name: 'Starter वॉलेट',
          tagline: 'नए ड्रॉप्स के लिए',
          features: [
            'प्रति सफल ऑर्डर 4% शुल्क (अधिकतम ₹250 प्रति ऑर्डर!)',
            '₹12 प्रति हल की गई सपोर्ट क्वेरी (बिना किसी स्टाफ के)',
            'अधूरी चैट और अनक्लोज़्ड वॉइस कॉल पर ₹0 (पहले 90 सेकंड फ्री)',
            '60-सेकंड में Shopify कैटलॉग, वैरिएंट और पॉलिसी सिंक',
          ],
          ctaInr: '₹4,500 लोड करें और ₹2,000 बोनस पाएं',
          ctaUsd: '$55 लोड करें और $24 बोनस पाएं',
        },
        {
          id: 'growth',
          name: 'Growth वॉलेट',
          tagline: 'सबसे लोकप्रिय',
          features: [
            'प्रति सफल ऑर्डर 3% शुल्क (अधिकतम ₹200 प्रति ऑर्डर!)',
            '₹9 प्रति हल की गई WhatsApp और वॉइस क्वेरी',
            'लाइव वॉइस पर 10+ भारतीय भाषाएं + ऑटो COD-से-Prepaid अपसेल',
            'स्मार्ट कूपन के साथ 1-क्लिक प्री-फिल्ड Shopify चेकआउट लिंक',
          ],
          ctaInr: 'Growth वॉलेट शुरू करें + ₹3,500 फ्री क्रेडिट',
          ctaUsd: 'Growth वॉलेट शुरू करें + $42 फ्री क्रेडिट',
        },
        {
          id: 'scale',
          name: 'Scale वॉलेट',
          tagline: 'हाई-वॉल्यूम D2C के लिए',
          features: [
            'प्रति सफल ऑर्डर 2% शुल्क (अधिकतम ₹150 प्रति ऑर्डर!)',
            'पीक ड्रॉप ट्रैफिक पर ₹7 प्रति हल की गई सपोर्ट क्वेरी',
            'डेडिकेटेड +91 ब्रांड कॉलर ID और कस्टम ब्रांड वॉइस क्लोनिंग',
            'प्रायोरिटी Meta Click-to-WhatsApp एट्रिब्यूशन व NDR रिकवरी',
          ],
          ctaInr: 'Scale वॉलेट क्लेम करें',
          ctaUsd: 'Scale वॉलेट क्लेम करें',
        },
      ],
      modalSuccessTitle: 'बोनस क्रेडिट रिज़र्व हो गया!',
      modalClaimPrefix: 'क्लेम करें',
      modalClaimSuffix: 'फ्री क्रेडिट',
      modalDone: 'हो गया',
      modalStoreLabel: 'Shopify स्टोर URL',
      modalEmailLabel: 'फाउंडर वर्क ईमेल',
      modalSubmit: 'Shopify कनेक्ट करने के लिए आगे बढ़ें',
    },
    comparison: {
      eyebrow: 'असली तुलना',
      heading: 'पुराने बोरिंग चैटबॉट्स बनाम Chttr',
      subtitle:
        'क्यों 180+ D2C फाउंडर्स ने ड्रैग-एंड-ड्रॉप बटन बॉट्स और फिक्स्ड सैलरी कॉल सेंटर्स को छोड़ दिया।',
      colDimension: 'पैमाना',
      colOld: 'पुराने WhatsApp चैटबॉट्स (Wati / Interakt)',
      colHuman: 'ह्यूमन कॉल सेंटर एजेंट्स',
      colChttr: 'Chttr AI',
      rows: [
        {
          dimension: 'सेटअप समय',
          oldChatbots: 'फ्लोचार्ट बनाने में 2 हफ्ते',
          humanCallCenter: 'भर्ती और स्क्रिप्ट ट्रेनिंग में 3 हफ्ते',
          chttrAi: '60-सेकंड का Shopify URL स्कैन',
        },
        {
          dimension: 'जब ग्राहक बात करना चाहे',
          oldChatbots: '"सॉरी, 1 दबाएं या 4 घंटे इंतज़ार करें"',
          humanCallCenter: 'शाम 7 बजे के बाद लाइन बंद या व्यस्त',
          chttrAi: '3 सेकंड में 24/7 तुरंत आउटबाउंड फोन कॉल',
        },
        {
          dimension: 'भाषाएं',
          oldChatbots: 'कठोर अंग्रेज़ी बटन टेम्पलेट्स',
          humanCallCenter: 'प्रति एजेंट केवल 1–2 भाषाएं',
          chttrAi: 'चलती कॉल में Hinglish, Tanglish और 22 भारतीय भाषाएं',
        },
        {
          dimension: 'प्राइसिंग मॉडल',
          oldChatbots: 'हर स्पैम मैसेज का भी पैसा वसूलते हैं',
          humanCallCenter: 'प्रति एजेंट ₹25,000/माह फिक्स्ड सैलरी',
          chttrAi: 'आउटकम वॉलेट (सिर्फ सेल होने पर ही % शुल्क)',
        },
      ],
    },
    social: {
      proofEyebrow: 'फाउंडर अनुभव',
      proofHeading: 'तेज़ी से बढ़ने वाले भारतीय D2C फाउंडर्स के लिए बना',
      testimonials: [
        {
          id: 'aarav',
          name: 'आरव मेहता',
          age: 24,
          role: 'फाउंडर',
          brand: 'KicksCulture',
          city: 'मुंबई',
          primaryMetric: '14 दिनों में +34% WhatsApp-से-Prepaid कन्वर्ज़न',
          secondaryMetric: 'NDR और कॉल सेंटर पर ₹75,000/माह की बचत',
          quote:
            '₹8,000+ के स्नीकर्स लेने से पहले ग्राहकों को असलीपन और साइज़ की चिंता होती है। Chttr 3 सेकंड में साफ मुंबई हिंदी+इंग्लिश में कॉल कर NFC टैग वेरिफिकेशन बताता है और UPI से पेमेंट करा देता है।',
        },
        {
          id: 'meera',
          name: 'मीरा नायर',
          age: 26,
          role: 'को-फाउंडर',
          brand: 'GlowTheory India',
          city: 'चेन्नई',
          primaryMetric: 'Tanglish वॉइस कॉल से बंडल AOV में +41% उछाल',
          secondaryMetric: 'छोड़े गए Reel क्लिक्स से ₹3.2L/माह की रिकवरी',
          quote:
            'तमिलनाडु और केरल के ग्राहक सख्त इंग्लिश बॉट्स से चिढ़ जाते थे। Chttr को नैचुरल Tanglish में नियासिनमाइड रूटीन समझाते और WhatsApp पर GPay लिंक भेजते देख हमारा ROAS रातों-रात दोगुना हो गया।',
        },
        {
          id: 'kabir',
          name: 'कबीर वर्मा',
          age: 23,
          role: 'फाउंडर',
          brand: 'OversizedClub',
          city: 'दिल्ली NCR',
          primaryMetric: 'ड्रॉप के दौरान 68% COD-से-Prepaid फ्लिप रेट',
          secondaryMetric: '10,000+ ऑर्डर में 0 ह्यूमन कॉलर्स की भर्ती',
          quote:
            'हर ड्रॉप नाइट पर 400 Instagram DMs अनदेखे रह जाते थे और COD पर भारी RTO होता था। अब Chttr तुरंत कॉल कर सही बॉक्सी फिट बताता है और ₹150 की छूट देकर अभी UPI करवा देता है।',
        },
      ],
      faqEyebrow: 'सीधे जवाब',
      faqHeading: 'Shopify जोड़ने से पहले फाउंडर्स के आम सवाल',
      faqSubtitle:
        'कोई भारी शब्दजाल नहीं। जानिए प्रोडक्शन में वॉइस इंजन, Shopify प्राइस लॉक और प्रीपेड वॉलेट बिलिंग कैसे काम करती है।',
      faqs: [
        {
          id: 'faq-1',
          question: 'क्या Chttr सच में मेरे ग्राहक को नॉर्मल मोबाइल कॉल करता है?',
          answer:
            'हाँ। जब कोई खरीदार WhatsApp पर हिचकिचाता है, साइज़ से जुड़ा सवाल पूछता है या "Call Me" टैप करता है, तो Chttr 3 सेकंड के भीतर उनके मोबाइल पर असली +91 आउटबाउंड कॉल लगाता है—बिना किसी ऐप डाउनलोड के। कॉल खत्म होते ही प्री-फिल्ड Shopify कार्ट लिंक WhatsApp पर आ जाता है।',
        },
        {
          id: 'faq-2',
          question: 'यह कॉल के बीच में हिंदी, इंग्लिश, तमिल या मराठी कैसे बदल लेता है?',
          answer:
            'हमारी वॉइस पाइपलाइन भारतीय बोली के लिए ट्यून किए गए स्पीच रिकॉग्निशन और लो-लेटेंसी सिंथेसिस (Sarvam + Bolna द्वारा संचालित) को जोड़ती है। यह हर वाक्य पर अपने आप भाषा पहचानती है—ग्राहक इंग्लिश से Hinglish या Tanglish में जाए, तो Chttr तुरंत उसी लहजे में जवाब देता है।',
        },
        {
          id: 'faq-3',
          question: 'अगर AI ने कोई नकली डिस्काउंट या गलत कीमत बता दी तो?',
          answer:
            'यह डिज़ाइन से ही असंभव है। Chttr सख्त Shopify कैटलॉग और चेकआउट लॉक पर चलता है। कीमत, लाइव स्टॉक, रिटर्न नियम और कूपन कोड सीधे आपके Shopify APIs से पढ़े जाते हैं—मॉडल खुद से कोई डिस्काउंट या लिंक नहीं बना सकता।',
        },
        {
          id: 'faq-4',
          question: 'क्या ग्राहक के चैट करके कार्ट छोड़ देने पर सच में ₹0 लगते हैं?',
          answer:
            'बिल्कुल। पुराने WhatsApp प्रोवाइडर्स की तरह हम प्रति मैसेज या विंडो चार्ज नहीं करते। अगर खरीदार 10 मिनट चैट करे या वॉइस कॉल पर बात करके (पहले 90 सेकंड फ्री) बिना ऑर्डर किए चला जाए, तो आपके वॉलेट से ₹0 कटते हैं।',
        },
        {
          id: 'faq-5',
          question: 'मैं अपना Shopify स्टोर और Meta Ads कितनी जल्दी जोड़ सकता हूँ?',
          answer:
            '2 मिनट से भी कम समय में। अपना Shopify URL डालें, 1-क्लिक Shopify ऐप को अनुमति दें और अपना Click-to-WhatsApp नंबर जोड़ें। Chttr 60 सेकंड में आपका स्टोर पढ़कर लाइव ऑर्डर लेने के लिए तैयार हो जाता है।',
        },
      ],
    },
    footer: {
      tagline: 'भारतीय D2C ब्रांड्स के लिए AI WhatsApp और आउटबाउंड वॉइस सेल्स इंजन · chttrbot.com',
      rights: 'सभी अधिकार सुरक्षित।',
      mobileCta: 'लाइव कॉल डेमो लें',
    },
  },
};
