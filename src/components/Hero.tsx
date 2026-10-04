import { links, proof } from '../content'
import { Icon } from './Icon'
import { ShopStreet } from './Illustrations'
import { StoreBadges } from './StoreBadges'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="tag">
          <span className="live-dot" /> Now live across Lagos
        </span>
        <h1>
          Your brand, on screens where your <em>customers are.</em>
        </h1>
        <p>Advertise on digital screens inside pharmacies, eateries and salons. Launch from your phone — live in 24 hours.</p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href={links.signup}>
            Start a campaign <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost btn-lg" href={links.hostApply}>
            Host a screen
          </a>
        </div>
      </div>

      <div className="hero-stage">
        <ShopStreet />
        <div className="chip chip-a">
          <span className="live-dot" /> Ad live · Pharmacy, Yaba
        </div>
        <div className="chip chip-b">
          <span className="chip-icon">
            <Icon name="eye" size={16} />
          </span>
          +1 verified view
        </div>
      </div>

      <ul className="proof">
        {proof.map((p) => (
          <li key={p.label}>
            <Icon name={p.icon} size={18} />
            {p.label}
          </li>
        ))}
      </ul>
      <StoreBadges className="hero-badges" />
    </section>
  )
}
