import { links } from '../content'
import { Icon } from './Icon'
import { ScreenNetwork, ShopSingle } from './Illustrations'

export function Audiences() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="reveal section-title">
          More ways to <em>grow with us.</em>
        </h2>
        <div className="audiences">
          <article className="aud aud-moss reveal" id="hosts">
            <div className="aud-copy">
              <span className="aud-kicker">For shop owners</span>
              <h3>Get paid for your wall.</h3>
              <p>We install a screen for free. Brands pay to reach your customers. You get paid every Friday.</p>
              <ul className="aud-pills">
                <li>₦0 install</li>
                <li>Weekly payouts</li>
                <li>No running costs</li>
              </ul>
              <a className="btn btn-light" href={links.hostApply}>
                Apply to host <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="aud-art">
              <ShopSingle kind="salon" />
              <div className="chip chip-e">
                <span className="chip-icon chip-icon-moss">
                  <Icon name="check" size={16} />
                </span>
                Payout sent · Friday
              </div>
            </div>
          </article>

          <article className="aud aud-ink reveal" id="agencies">
            <div className="aud-copy">
              <span className="aud-kicker">For agencies &amp; brands</span>
              <h3>Buy the whole network.</h3>
              <p>Book verified screens for your clients and hand them reports they’ll trust.</p>
              <ul className="aud-pills">
                <li>Direct booking</li>
                <li className="soon">Programmatic · soon</li>
                <li className="soon">White-label · soon</li>
              </ul>
              <a className="btn btn-light" href={links.email}>
                Talk to our team <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="aud-art">
              <ScreenNetwork />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
