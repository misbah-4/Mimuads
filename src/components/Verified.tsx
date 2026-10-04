import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { AdSlides } from './Illustrations'

export function Verified() {
  const [views, setViews] = useState(12480)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setViews((v) => v + 1 + Math.floor(Math.random() * 3)), 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section section-alt">
      <div className="container split split-rev">
        <div className="stage stage-ink reveal">
          <div className="wall-screen">
            <span className="sensor" />
            <svg viewBox="0 0 158 95">
              <AdSlides w={158} h={95} offset={1} />
            </svg>
            <span className="scan" />
          </div>
          <div className="chip chip-c">
            <span className="chip-icon">
              <Icon name="eye" size={16} />
            </span>
            <span>
              <small>Verified views today</small>
              <b>{views.toLocaleString('en-US')}</b>
            </span>
          </div>
          <div className="chip chip-d">
            <Icon name="shield" size={16} /> No camera data leaves the screen
          </div>
        </div>

        <div className="split-copy">
          <h2 className="reveal">
            Pay only for <em>real views.</em>
          </h2>
          <p className="lead reveal">
            AI on every screen counts real viewers, anonymously. No estimates. No fraud. Just attention you can prove.
          </p>
        </div>
      </div>
    </section>
  )
}
