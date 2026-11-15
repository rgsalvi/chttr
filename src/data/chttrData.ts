import hoodieImg from '../assets/images/streetwear_acid_hoodie_1794762266965.jpg';
import serumImg from '../assets/images/skincare_vitc_serum_1794762266868.jpg';
import sneakersImg from '../assets/images/sneakers_retro_hightop_1794762268041.jpg';

export type DemoLanguage = 'Hinglish' | 'English' | 'Tanglish' | 'Benglish' | 'Marathi Mix';

export interface TranscriptLine {
  id: string;
  speaker: 'shopper' | 'ai';
  name: string;
  cityOrRole: string;
  text: string;
  startTime: number; // seconds
  endTime: number; // seconds
  speechLang: string;
}

export interface CartEventBadge {
  id: string;
  label: string;
  triggerAt: number; // seconds
  kind: 'cart' | 'discount' | 'paid';
}

export interface VoiceScenario {
  id: string;
  tabLabel: string;
  languageTag: string;
  durationSec: number;
  durationLabel: string;
  brandName: string;
  productTitle: string;
  productVariant: string;
  originalPriceInr: number;
  finalPriceInr: number;
  paymentMethod: string;
  imagePath: string;
  imageAlt: string;
  accentHex: string;
  lines: TranscriptLine[];
  cartEvents: CartEventBadge[];
}

export const DEMO_LANGUAGES: { label: DemoLanguage; greeting: string; speechLang: string }[] = [
  {
    label: 'Hinglish',
    greeting:
      'Hey! Maine aapka Shopify store scan kar liya hai. Medium size Hoodie ke saath flat 150 off UPI checkout link aapke WhatsApp par bhej diya hai!',
    speechLang: 'en-IN',
  },
  {
    label: 'English',
    greeting:
      'Hi there! I just synced your Shopify catalog and policies. Your pre-filled 1-click checkout link is ready on WhatsApp.',
    speechLang: 'en-IN',
  },
  {
    label: 'Tanglish',
    greeting:
      'Vanakkam! Ungaloda Shopify store catalog sync aayiduchu. Chennai weather-ku suit aagura serum combo link WhatsApp-la anuppitten!',
    speechLang: 'en-IN',
  },
  {
    label: 'Benglish',
    greeting:
      'Nomoshkar! Aapnar store er shob product details ready. Pre-filled UPI checkout link WhatsApp e pathiye diyechi!',
    speechLang: 'en-IN',
  },
  {
    label: 'Marathi Mix',
    greeting:
      'Namaskar! Tumchya store cha catalog ready aahe. Fast delivery ani 1-click UPI payment link WhatsApp var pathavli aahe!',
    speechLang: 'en-IN',
  },
];

export const VOICE_SCENARIOS: VoiceScenario[] = [
  {
    id: 'hinglish-streetwear',
    tabLabel: 'Hinglish · Streetwear',
    languageTag: 'Hinglish · Live Call',
    durationSec: 38,
    durationLabel: '0:38',
    brandName: 'UrbanMonkey Demo',
    productTitle: 'Oversized Acid Wash Hoodie',
    productVariant: 'Size M · Charcoal Slate',
    originalPriceInr: 1799,
    finalPriceInr: 1649,
    paymentMethod: 'Paid via UPI',
    imagePath: hoodieImg,
    imageAlt: 'Charcoal acid wash oversized streetwear hoodie',
    accentHex: '#25F46A',
    lines: [
      {
        id: 'h-1',
        speaker: 'shopper',
        name: 'Rahul',
        cityOrRole: 'Shopper · Delhi',
        text: 'Bro yeh Oversized Acid Wash Hoodie Large mein bohot baggy toh nahi hoga? My chest is 40 inches. Aur COD milega kya?',
        startTime: 0,
        endTime: 13,
        speechLang: 'en-IN',
      },
      {
        id: 'h-2',
        speaker: 'ai',
        name: 'Maya',
        cityOrRole: 'Chttr Voice AI · Hinglish',
        text: "Arre Rahul, 40 chest ke liye Medium ekdum clean boxy fit aayega—Large thoda zyada drop-shoulder ho jayega! COD available hai for ₹100 extra, par agar aap abhi WhatsApp link se UPI karoge toh I've unlocked flat ₹150 OFF + free express shipping. Link bhej diya hai, check karo!",
        startTime: 13,
        endTime: 38,
        speechLang: 'en-IN',
      },
    ],
    cartEvents: [
      { id: 'hc-1', label: 'Added Medium Hoodie', triggerAt: 15, kind: 'cart' },
      { id: 'hc-2', label: 'Applied PREPAID150', triggerAt: 24, kind: 'discount' },
      { id: 'hc-3', label: 'Paid ₹1,649 via UPI', triggerAt: 33, kind: 'paid' },
    ],
  },
  {
    id: 'tanglish-skincare',
    tabLabel: 'Tanglish · Skincare',
    languageTag: 'Tanglish · Live Call',
    durationSec: 42,
    durationLabel: '0:42',
    brandName: 'GlowTheory India',
    productTitle: 'Vitamin C + Niacinamide Glow Duo',
    productVariant: '30ml Serum + Barrier Mist',
    originalPriceInr: 1399,
    finalPriceInr: 1199,
    paymentMethod: 'Paid via GPay',
    imagePath: serumImg,
    imageAlt: 'Amber glass dropper bottle of Vitamin C skincare serum',
    accentHex: '#8B5CF6',
    lines: [
      {
        id: 't-1',
        speaker: 'shopper',
        name: 'Priya',
        cityOrRole: 'Shopper · Chennai',
        text: 'Indha Vitamin C serum oily skin-ku suit aaguma? Will it cause breakouts in Chennai humidity?',
        startTime: 0,
        endTime: 14,
        speechLang: 'en-IN',
      },
      {
        id: 't-2',
        speaker: 'ai',
        name: 'Kavya',
        cityOrRole: 'Chttr Voice AI · Tanglish',
        text: '100% suit aagum Priya! Idhu water-based formula with Niacinamide, so Chennai weather-la kooda zero stickiness irukkum. Starting-la night mattum 2 drops use pannunga. Combo pack edutha ₹200 save aagum—shall I send the 1-click checkout link to your WhatsApp?',
        startTime: 14,
        endTime: 42,
        speechLang: 'en-IN',
      },
    ],
    cartEvents: [
      { id: 'tc-1', label: 'Glow Duo Bundle Added', triggerAt: 18, kind: 'cart' },
      { id: 'tc-2', label: 'Saved ₹200 Combo Offer', triggerAt: 28, kind: 'discount' },
      { id: 'tc-3', label: 'Paid ₹1,199 via GPay', triggerAt: 36, kind: 'paid' },
    ],
  },
  {
    id: 'sneakers-mumbai',
    tabLabel: 'English + Hindi · Sneakers',
    languageTag: 'Indian English + Hindi · Live Call',
    durationSec: 35,
    durationLabel: '0:35',
    brandName: 'KicksCulture Mumbai',
    productTitle: 'Retro High OG Varsity Edition',
    productVariant: 'UK 9 · NFC Authenticated',
    originalPriceInr: 8499,
    finalPriceInr: 8499,
    paymentMethod: 'Paid via Snapmint / UPI',
    imagePath: sneakersImg,
    imageAlt: 'White, black, and red leather retro high-top sneakers',
    accentHex: '#FF4D6D',
    lines: [
      {
        id: 's-1',
        speaker: 'shopper',
        name: 'Aarav',
        cityOrRole: 'Shopper · Mumbai',
        text: 'Hey, I clicked your reel ad. Are these Jordans 100% legit? And how fast can you deliver to Bandra?',
        startTime: 0,
        endTime: 12,
        speechLang: 'en-IN',
      },
      {
        id: 's-2',
        speaker: 'ai',
        name: 'Rohan',
        cityOrRole: 'Chttr Voice AI · EN+HI',
        text: "Totally get the concern Aarav! Every pair comes with our lab-verified NFC tag and 7-day size exchange. Since you're in Bandra, humara Mumbai warehouse se कल शाम तक same-day या next-day delivery ho jayega. Check your WhatsApp—maine size UK 9 ka pre-filled checkout link bhej diya hai!",
        startTime: 12,
        endTime: 35,
        speechLang: 'en-IN',
      },
    ],
    cartEvents: [
      { id: 'sc-1', label: 'UK 9 Reserved + NFC Verified', triggerAt: 15, kind: 'cart' },
      { id: 'sc-2', label: 'Bandra Next-Day Slot Locked', triggerAt: 23, kind: 'discount' },
      { id: 'sc-3', label: 'Paid ₹8,499 via Snapmint/UPI', triggerAt: 30, kind: 'paid' },
    ],
  },
];

export interface WalletTier {
  id: 'starter' | 'growth' | 'scale';
  name: string;
  tagline: string;
  minTopUpInr: number;
  bonusCreditInr: number;
  checkoutFeePct: number;
  capPerOrderInr: number;
  resolvedInquiryInr: number;
  popular?: boolean;
  features: string[];
  ctaTextInr: string;
  ctaTextUsd: string;
}

export const WALLET_TIERS: WalletTier[] = [
  {
    id: 'starter',
    name: 'Starter Wallet',
    tagline: 'For New Drops',
    minTopUpInr: 4500,
    bonusCreditInr: 2000,
    checkoutFeePct: 4,
    capPerOrderInr: 250,
    resolvedInquiryInr: 12,
    features: [
      '4% per completed checkout (capped at max ₹250 per order)',
      '₹12 per resolved support inquiry with zero humans needed',
      '₹0 for abandoned chats & unclosed voice calls (first 90s free)',
      '60-second Shopify catalog, variant & policy sync',
    ],
    ctaTextInr: 'Load ₹4,500 & Get ₹2,000 Bonus Credit',
    ctaTextUsd: 'Load $55 & Get $24 Bonus Credit',
  },
  {
    id: 'growth',
    name: 'Growth Wallet',
    tagline: 'Most Popular',
    minTopUpInr: 18000,
    bonusCreditInr: 3500,
    checkoutFeePct: 3,
    capPerOrderInr: 200,
    resolvedInquiryInr: 9,
    popular: true,
    features: [
      '3% per completed checkout (capped at max ₹200 per order)',
      '₹9 per resolved support inquiry across WhatsApp & Voice',
      '10+ Indian languages on live voice + auto COD-to-Prepaid upsell',
      '1-click pre-filled Shopify checkout links with smart coupons',
    ],
    ctaTextInr: 'Start Growth Wallet + ₹3,500 Free Credit',
    ctaTextUsd: 'Start Growth Wallet + $42 Free Credit',
  },
  {
    id: 'scale',
    name: 'Scale Wallet',
    tagline: 'For High-Volume D2C',
    minTopUpInr: 45000,
    bonusCreditInr: 7500,
    checkoutFeePct: 2,
    capPerOrderInr: 150,
    resolvedInquiryInr: 7,
    features: [
      '2% per completed checkout (capped at max ₹150 per order)',
      '₹7 per resolved support inquiry at peak drop concurrency',
      'Dedicated +91 Brand Caller ID & custom brand voice cloning',
      'Priority Meta Click-to-WhatsApp attribution & NDR recovery',
    ],
    ctaTextInr: 'Claim Scale Wallet',
    ctaTextUsd: 'Claim Scale Wallet',
  },
];

export interface ComparisonRow {
  dimension: string;
  oldChatbots: string;
  humanCallCenter: string;
  chttrAi: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
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
];

export interface FounderTestimonial {
  id: string;
  name: string;
  age: number;
  role: string;
  brand: string;
  city: string;
  primaryMetric: string;
  secondaryMetric: string;
  quote: string;
}

export const FOUNDER_TESTIMONIALS: FounderTestimonial[] = [
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
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
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
];
