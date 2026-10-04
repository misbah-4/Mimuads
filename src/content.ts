export const links = {
  login: 'https://ads.usemimu.com/login',
  signup: 'https://ads.usemimu.com/signup',
  hostApply: 'https://host.usemimu.com/apply',
  email: 'mailto:hello@usemimu.com',
  appStore: 'https://apps.apple.com/app/mimuads/id6775953486',
  playStore: 'https://play.google.com/store/apps/details?id=ng.mimu.advertiser',
  playerApk: 'https://mimu-player-apks-prod.s3.eu-north-1.amazonaws.com/vc23/app-field.apk',
  instagram: 'https://instagram.com/mimuads',
  twitter: 'https://twitter.com/mimuads',
  linkedin: 'https://linkedin.com/company/mimuads',
  terms: '/terms',
}

export const nav = [
  { label: 'Advertisers', href: '#advertisers' },
  { label: 'Agencies', href: '#agencies' },
  { label: 'Hosts', href: '#hosts' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
]

export const heroWords = ['brand', 'products', 'business', 'story', 'message']

export const heroStats = [
  { value: '18 LGAs', label: 'Lagos coverage' },
  { value: 'AI-Native', label: 'From the ground up' },
  { value: 'APCON', label: 'Fully compliant' },
  { value: '24 hrs', label: 'Go-live time' },
]

export const platformFeatures = [
  {
    icon: 'bolt',
    title: 'Self-Serve in Minutes',
    body: 'Create, target and launch your campaign from your phone. No agency, no back-and-forth, no waiting.',
  },
  {
    icon: 'target',
    title: 'AI Screen Targeting',
    body: 'Our AI selects the screens where your audience is most likely to convert, based on venue type and foot traffic.',
  },
  {
    icon: 'pulse',
    title: 'Live Optimization',
    body: 'The platform watches your campaign performance in real time and shifts budget to your best-performing screens.',
  },
  {
    icon: 'eye',
    title: 'On-Device Verification',
    body: 'Viewership is counted by AI running directly on each screen — no estimates, no off-device data, no fraud.',
  },
] as const

export const aiLog = [
  { t: '09:41', m: 'Screen #LK-312 added — high-traffic pharmacy, Yaba' },
  { t: '09:43', m: '14 creatives cleared by APCON AI checker' },
  { t: '09:44', m: 'Campaign deployed across 3,247 screens' },
  { t: '09:51', m: 'AI reallocating budget → top 48 screens (↑32% ROI)' },
  { t: '10:02', m: '1.4M verified impressions logged today' },
]

export const advertiserFeatures = [
  {
    icon: 'eye',
    title: 'AI-Verified Viewership',
    body: 'On-device AI counts real viewers anonymously. You pay only for verified attention — not estimates, not guesses.',
  },
  {
    icon: 'shield',
    title: 'APCON Compliant',
    body: 'Every creative is reviewed and vetted before it goes live. Regulatory peace of mind, built in.',
  },
  {
    icon: 'clock',
    title: 'Live in 24 Hours',
    body: 'Upload your creative, choose your screens, and your ad is running the next day. No agency in between.',
  },
  {
    icon: 'pin',
    title: 'Real Neighbourhoods',
    body: 'Pharmacies, eateries, salons — the everyday places your customers already visit, across 18 Lagos LGAs.',
  },
] as const

export const agencyFeatures = [
  {
    icon: 'check',
    title: 'Verified Inventory',
    body: 'Buy against computer-vision-verified impressions — the audited proof of play serious buyers require before committing client budgets.',
  },
  {
    icon: 'code',
    title: 'Programmatic Access',
    body: 'A supply-side API that lets your DSP or buying platform activate African DOOH inventory the same way you buy digital today.',
  },
  {
    icon: 'chart',
    title: 'Client-Ready Reporting',
    body: 'Standardised dashboards — verified impressions, reach by LGA, peak-time performance — you can hand straight to your client.',
  },
  {
    icon: 'layers',
    title: 'White-Label Ready',
    body: 'Run the whole network under your own brand. We power the players, targeting and verification; you own the client relationship.',
  },
] as const

export const agencyTracks = [
  {
    n: '01',
    status: 'Available now',
    state: 'live',
    title: 'Direct booking',
    body: 'Book campaigns on behalf of clients through the platform — the same self-serve flow, with larger budgets and more screens.',
  },
  {
    n: '02',
    status: 'In build',
    state: 'build',
    title: 'Programmatic buyer',
    body: 'Activate Mimuads inventory through Vistar, Concord or your own DSP via our supply-side API.',
  },
  {
    n: '03',
    status: 'On roadmap',
    state: 'roadmap',
    title: 'White-label operator',
    body: 'Licence the full stack — player software, AI targeting, CV verification — and run your own branded DOOH network.',
  },
] as const

export const hostPerks = [
  'Screen installed at zero cost to you',
  'Earn passive income every month',
  'Paid directly to your bank account, every Friday',
  'No maintenance or running costs on your end',
  'Serve ads that matter to your community',
]

export const hostStats = [
  { value: '₦0', label: 'Installation cost' },
  { value: 'Weekly', label: 'Payment schedule' },
  { value: 'Zero', label: 'Running costs' },
]

export const steps = [
  {
    n: '01',
    title: 'Upload Your Creative',
    body: "Send us your ad — image or short video. Our team handles APCON vetting so you're always compliant, without extra work.",
  },
  {
    n: '02',
    title: 'Pick Your Screens',
    body: 'Choose locations by LGA, venue type, or daily foot traffic. See exactly where your ad will run before you commit.',
  },
  {
    n: '03',
    title: 'Go Live',
    body: 'Your ad plays on real screens inside real Lagos shops. Verified impression counts reported as they happen.',
  },
]

export const faqs = [
  {
    q: 'What is Mimuads?',
    a: "Mimuads is Africa's AI-native digital out-of-home (DOOH) platform — and the infrastructure layer beneath it. SMEs self-serve campaigns on smart screens inside high-traffic venues like pharmacies, eateries and salons, while agencies, brands and buying platforms activate the same verified network at scale. AI handles targeting, APCON compliance and on-device viewership verification.",
  },
  {
    q: 'How does the viewership verification work?',
    a: 'Each screen runs an on-device AI model that counts real viewers anonymously — no camera data leaves the device. You buy against verified proof of play, not inflated estimates, which is the standard agency finance and clients require to sign off spend.',
  },
  {
    q: 'What kind of businesses advertise on Mimuads?',
    a: 'Everyone from SMEs and startups to established brands and the agencies that represent them. If your customer visits a pharmacy, eats out or stops by a salon, Mimuads puts your brand in front of them — self-serve for a single shop, or across the whole network for a national campaign.',
  },
  {
    q: 'Can agencies and brands buy at scale?',
    a: 'Yes. Agencies book across the whole verified network on behalf of clients today, with volume rates on larger campaigns and client-ready reporting — verified impressions, reach by LGA and peak-time performance.',
  },
  {
    q: 'Can I buy programmatically or run Mimuads white-label?',
    a: "That's the roadmap. Beyond direct booking, Mimuads is building a supply-side API so agencies and DSPs can activate our inventory programmatically, plus white-label infrastructure to run a DOOH network — player software, AI targeting and computer-vision verification — under your own brand. Email hello@usemimu.com for early access.",
  },
  {
    q: 'Who can host a screen?',
    a: 'Any venue with consistent foot traffic — pharmacies, eateries, salons, boutiques. We install the screen at no cost and handle all maintenance.',
  },
  {
    q: 'Is Mimuads APCON registered?',
    a: "Yes. Every creative on the network is vetted for APCON compliance before it goes live. Advertisers don't manage that process separately.",
  },
]
