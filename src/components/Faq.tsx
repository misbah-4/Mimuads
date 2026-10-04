import { useState } from 'react'
import { faqs, links } from '../content'
import { Icon } from './Icon'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-wrap">
        <div className="faq-head reveal">
          <h2>
            Questions? <em>Answered.</em>
          </h2>
          <p>
            Anything else? <a href={links.email}>hello@usemimu.com</a>
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq ${isOpen ? 'is-open' : ''}`}>
                <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                <div className="faq-a" id={`faq-${i}`} role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
