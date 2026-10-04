import { agencyFeatures, agencyTracks, links } from '../content'
import { Icon } from './Icon'

export function Agencies() {
  return (
    <section className="section" id="agencies">
      <div className="dark-panel">
        <div className="container">
          <div className="section-head section-head-split reveal">
            <div>
              <span className="eyebrow eyebrow-on-dark">For Agencies &amp; Brands</span>
              <h2>
                The infrastructure layer for DOOH <em>at scale.</em>
              </h2>
            </div>
            <p>
              Plug your clients into Africa's verified DOOH supply. Book across the whole screen network, activate
              programmatically, and report on computer-vision-verified impressions — under your own brand if you
              want.
            </p>
          </div>

          <div className="grid-4">
            {agencyFeatures.map((f, i) => (
              <article key={f.title} className="card card-dark reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="icon-chip icon-chip-dark">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>

          <h3 className="tracks-title reveal">Three ways to plug in</h3>
          <div className="tracks">
            {agencyTracks.map((t, i) => (
              <article key={t.n} className={`track track-${t.state} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="track-top">
                  <span className="track-n">{t.n}</span>
                  <span className="track-status">{t.status}</span>
                </div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </article>
            ))}
          </div>

          <div className="panel-ctas reveal">
            <a className="btn btn-light btn-lg" href={links.signup}>
              Explore agency solutions <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-outline-light btn-lg" href={links.email}>
              Talk to our agency team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
