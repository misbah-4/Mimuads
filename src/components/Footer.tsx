import { links, nav } from '../content'
import { Icon, Logo } from './Icon'
import { StoreBadges } from './StoreBadges'

export function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-copy">
            <h2>
              Ready to reach <em>your audience?</em>
            </h2>
            <p>Start your campaign today or apply to host a screen in your space.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light btn-lg" href={links.signup}>
              Start a Campaign <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-outline-light btn-lg" href={links.hostApply}>
              Apply to Host
            </a>
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
            <Logo size={26} />
            <p>Africa's AI-native digital out-of-home platform. Your brand, on screens where your audience is.</p>
            <a className="footer-mail" href={links.email}>
              hello@usemimu.com <Icon name="arrow" size={16} />
            </a>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Get started</h4>
            <a href={links.signup}>Start a Campaign</a>
            <a href={links.login}>Log in</a>
            <a href={links.hostApply}>Apply to Host</a>
            <a href={links.playerApk}>Download TV player</a>
          </div>

          <div className="footer-col">
            <h4>Get the app</h4>
            <StoreBadges className="store-badges-col" />
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
        </div>

        <div className="footer-word" aria-hidden="true">
          mimuads
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mimuads · Digital Out-of-Home · Global</span>
          <div className="footer-legal">
            <a href={links.terms}>Privacy</a>
            <a href={links.terms}>Terms</a>
            <a href={links.terms}>APCON</a>
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
