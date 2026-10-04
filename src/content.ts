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
  { label: 'How it works', href: '#how' },
  { label: 'Hosts', href: '#hosts' },
  { label: 'Agencies', href: '#agencies' },
  { label: 'FAQ', href: '#faq' },
]

export const proof = [
  { icon: 'pin', label: '18 Lagos LGAs' },
  { icon: 'clock', label: 'Live in 24 hours' },
  { icon: 'shield', label: 'APCON registered' },
  { icon: 'eye', label: 'Pay per verified view' },
] as const

export const steps = [
  { title: 'Upload your ad', body: 'An image or short video. We handle APCON approval.' },
  { title: 'Pick your screens', body: 'Choose by area or venue. AI suggests the best spots.' },
  { title: 'Go live', body: 'Your ad runs within 24 hours. Track every verified view.' },
]

export const faqs = [
  {
    q: 'What is Mimuads?',
    a: 'A self-serve platform for advertising on digital screens inside busy Lagos pharmacies, eateries and salons.',
  },
  {
    q: 'How are views verified?',
    a: 'AI on each screen counts real viewers anonymously. No camera data ever leaves the device.',
  },
  {
    q: 'How fast can my ad go live?',
    a: 'Within 24 hours. Every ad is vetted for APCON compliance — you don’t have to do anything extra.',
  },
  {
    q: 'Can agencies buy at scale?',
    a: 'Yes. Book across the whole network with volume rates and client-ready reports. Programmatic and white-label access are coming.',
  },
  {
    q: 'Who can host a screen?',
    a: 'Any venue with steady foot traffic. Installation is free and we handle all maintenance.',
  },
]
