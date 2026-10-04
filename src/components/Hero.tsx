import { heroStats, heroWords, links } from '../content'
import { useCycle } from '../hooks'
import { Icon, Logo } from './Icon'
import { StoreBadges } from './StoreBadges'

export function Hero() {
  const { item: word } = useCycle(heroWords, 2200)

  return (
    <section className="hero" id="top">
      <div className="hero-panel">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow eyebrow-on-dark">
            <span className="live-dot" /> AI-Powered · Digital Out-of-Home · Global
          </span>
          <h1 className="hero-title">
            Your{' '}
            <span className="word-swap" aria-live="polite">
              <span key={word} className="word-swap-inner">
                {word}
              </span>
            </span>
            . On digital screens where your <em>audience is.</em>
          </h1>
          <p className="hero-sub">
            The first AI-native outdoor ad platform in Africa. Launch campaigns yourself — no agency needed. AI handles
            targeting, compliance, and viewership verification automatically.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-light btn-lg" href={links.signup}>
              Start a Campaign <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-outline-light btn-lg" href="#how">
              See how it works <Icon name="arrowDown" size={18} />
            </a>
          </div>
          <StoreBadges />
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="screen">
            <div className="screen-bezel">
              <div className="ad-slide">
                <span className="ad-slide-brand">
                  <Logo size={18} />
                </span>
                <span className="ad-slide-word" key={word}>
                  Your {word}
                  <span>here.</span>
                </span>
                <span className="ad-slide-meta">Pharmacy · Yaba · 09:41</span>
              </div>
              <video
                src="/fallback/mimu_m_clay.mp4"
                autoPlay
                muted
                loop
                playsInline
                onPlaying={(e) => e.currentTarget.classList.add('is-playing')}
              />
              <span className="screen-tag">
                <span className="live-dot" /> LIVE · LAGOS
              </span>
            </div>
            <div className="screen-stand" />
          </div>

          <div className="float-card float-a">
            <span className="float-label">Verified views today</span>
            <strong>30.2M</strong>
            <span className="float-trend">↑ 12.4%</span>
          </div>
          <div className="float-card float-b">
            <span className="float-icon">
              <Icon name="pin" size={18} />
            </span>
            <div>
              <strong>Pharmacy, Yaba</strong>
              <span className="float-label">Screen #LK-312 added</span>
            </div>
          </div>
          <div className="float-card float-c">
            <span className="float-label">Cost</span>
            <strong>
              ₦0.12<small>/ verified view</small>
            </strong>
          </div>
        </div>

        <p className="hero-caption">
          An ad. On a screen. In a shop. <span>Where the customer already is.</span>
        </p>
      </div>

      <ul className="stat-strip">
        {heroStats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
