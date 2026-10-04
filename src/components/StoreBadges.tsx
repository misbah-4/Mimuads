import { links } from '../content'

function AppleMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c.02 2.32 2.04 3.1 2.06 3.1-.02.06-.32 1.1-1.06 2.18-.64.93-1.3 1.86-2.35 1.88-1.03.02-1.36-.61-2.54-.61-1.18 0-1.55.59-2.52.63-1.01.04-1.78-1-2.42-1.93-1.32-1.9-2.32-5.38-.97-7.73.67-1.17 1.87-1.9 3.17-1.92.99-.02 1.93.67 2.54.67.6 0 1.75-.83 2.95-.7.5.02 1.91.2 2.81 1.53-.07.05-1.68.98-1.67 2.93ZM14.43 6.9c.54-.65.9-1.56.8-2.46-.77.03-1.71.52-2.27 1.17-.5.57-.94 1.5-.82 2.38.86.07 1.75-.44 2.29-1.09Z" />
    </svg>
  )
}

function PlayMark() {
  return (
    <svg width="18" height="20" viewBox="0 0 24 26" aria-hidden="true">
      <path d="M1.2.6 13.4 12.8 1.2 25a1.8 1.8 0 0 1-.7-1.5V2.1c0-.6.3-1.1.7-1.5Z" fill="#2b7244" />
      <path d="m17.5 8.7-4.1 4.1 4.1 4.1 4.8-2.7c1.4-.8 1.4-2.1 0-2.9l-4.8-2.6Z" fill="#d9803a" />
      <path d="M17.5 16.9 13.4 12.8 1.2 25c.5.5 1.3.5 2.2 0l14.1-8.1Z" fill="#b55430" />
      <path d="M17.5 8.7 3.4.6C2.5.1 1.7.1 1.2.6l12.2 12.2 4.1-4.1Z" fill="#ff4930" />
    </svg>
  )
}

export function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`store-badges ${className}`}>
      <a className="store-badge" href={links.appStore} target="_blank" rel="noreferrer">
        <AppleMark />
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
      <a className="store-badge" href={links.playStore} target="_blank" rel="noreferrer">
        <PlayMark />
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
    </div>
  )
}
