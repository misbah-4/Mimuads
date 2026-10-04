import { advertiserFeatures, links } from '../content'
import { Icon, Logo } from './Icon'

function CampaignPhone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-top">
          <span className="app-greet">New campaign</span>
          <span className="app-step">Step 2 of 3</span>
        </div>
        <div className="app-creative">
          <span className="app-creative-fallback">
            <Logo size={16} />
          </span>
          <video
            src="/fallback/mimu_m_dark.mp4"
            autoPlay
            muted
            loop
            playsInline
            onPlaying={(e) => e.currentTarget.classList.add('is-playing')}
          />
          <span className="pill pill-ok">APCON ✓</span>
        </div>
        <span className="app-label">Pick your screens</span>
        <ul className="app-venues">
          <li>
            <span className="venue-dot v-clay" /> Pharmacies · Yaba <b>142</b>
          </li>
          <li>
            <span className="venue-dot v-moss" /> Eateries · Ikeja <b>96</b>
          </li>
          <li>
            <span className="venue-dot v-gold" /> Salons · Surulere <b>58</b>
          </li>
        </ul>
        <div className="app-reach">
          <span>Est. verified views / day</span>
          <strong>48,300</strong>
        </div>
        <span className="app-btn">Go live tomorrow</span>
      </div>
    </div>
  )
}

export function Advertisers() {
  return (
    <section className="section section-alt" id="advertisers">
      <div className="container split">
        <div className="split-copy">
          <div className="reveal">
            <span className="eyebrow">For Advertisers</span>
            <h2>
              Reach customers where <em>they already are.</em>
            </h2>
            <p className="lead">
              Your audience is in their neighbourhood right now. Put your brand on the screens they walk past every
              single day.
            </p>
          </div>
          <div className="mini-grid">
            {advertiserFeatures.map((f, i) => (
              <article key={f.title} className="mini reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="icon-chip icon-chip-sm">
                  <Icon name={f.icon} size={18} />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="btn btn-primary btn-lg reveal" href={links.signup}>
            Start a Campaign <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="split-visual reveal">
          <div className="visual-panel visual-clay">
            <CampaignPhone />
            <div className="float-card float-d">
              <span className="float-label">Live in</span>
              <strong>24 hrs</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
