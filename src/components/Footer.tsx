import { links } from '../content'
import { Icon, Logo } from './Icon'
import { PhoneScreen } from './Steps'
import { StoreBadges } from './StoreBadges'

export function FinalCta() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-copy">
            <h2>
              Get on screen <em>this week.</em>
            </h2>
            <p>Start your first campaign in minutes — from the web or the app.</p>
            <div className="cta-actions">
              <a className="btn btn-light btn-lg" href={links.signup}>
                Start a campaign <Icon name="arrow" size={18} />
              </a>
            </div>
            <StoreBadges />
          </div>
          <div className="cta-phone" aria-hidden="true">
            <PhoneScreen index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={24} />
            <p>Ads on screens where your customers are.</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href={links.signup}>Start a campaign</a>
            <a href={links.hostApply}>Host a screen</a>
            <a href={links.login}>Log in</a>
            <a href={links.playerApk}>TV player app</a>
            <a href={links.email}>hello@usemimu.com</a>
          </nav>
          <div className="socials">
            <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={18} />
            </a>
            <a href={links.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <Icon name="twitter" size={16} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mimuads</span>
          <div className="footer-legal">
            <a href={links.terms}>Privacy</a>
            <a href={links.terms}>Terms</a>
            <a href={links.terms}>NDPR</a>
          </div>
          <span className="apcon-badge">
            <Icon name="shield" size={14} /> APCON registered
          </span>
        </div>
      </div>
    </footer>
  )
}
