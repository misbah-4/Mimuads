import { hostPerks, hostStats, links } from '../content'
import { Icon } from './Icon'

function PayoutPhone() {
  return (
    <div className="phone phone-tilt" aria-hidden="true">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-top">
          <span className="app-greet">Host earnings</span>
          <span className="app-step">This month</span>
        </div>
        <div className="payout">
          <span>Available balance</span>
          <strong>₦184,500</strong>
          <span className="float-trend">↑ ₦42,300 this week</span>
        </div>
        <div className="mini-chart">
          {[38, 52, 46, 64, 58, 72, 86].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <ul className="payouts">
          <li>
            <span>Fri payout</span>
            <b>₦42,300</b>
          </li>
          <li>
            <span>Fri payout</span>
            <b>₦39,850</b>
          </li>
          <li>
            <span>Fri payout</span>
            <b>₦37,100</b>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function Hosts() {
  return (
    <section className="section section-alt" id="hosts">
      <div className="container split split-rev">
        <div className="split-visual reveal">
          <div className="visual-panel visual-moss">
            <PayoutPhone />
            <div className="float-card float-e">
              <span className="float-icon">
                <Icon name="check" size={18} />
              </span>
              <div>
                <strong>Paid every Friday</strong>
                <span className="float-label">Straight to your bank</span>
              </div>
            </div>
          </div>
        </div>

        <div className="split-copy">
          <div className="reveal">
            <span className="eyebrow">For Hosts</span>
            <h2>
              Your walls already work. Now let them <em>earn.</em>
            </h2>
            <p className="lead">
              We place a screen, brands pay to reach your customers, and you earn every month — zero effort, zero
              running costs on your end.
            </p>
          </div>
          <ul className="checklist reveal">
            {hostPerks.map((p) => (
              <li key={p}>
                <span className="check">
                  <Icon name="check" size={18} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <ul className="host-stats reveal">
            {hostStats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="btn-row reveal">
            <a className="btn btn-primary btn-lg" href={links.hostApply}>
              Apply to Host <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-ghost btn-lg" href={links.playerApk}>
              <Icon name="download" size={18} /> TV player (APK)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
