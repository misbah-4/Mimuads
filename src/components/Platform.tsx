import { useEffect, useState } from 'react'
import { aiLog, links, platformFeatures } from '../content'
import { useCountUp } from '../hooks'
import { Icon } from './Icon'

function Counter({ to, decimals = 0, suffix = '' }: { to: number; decimals?: number; suffix?: string }) {
  const { ref, value } = useCountUp(to)
  return (
    <span ref={ref}>
      {value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

function Dashboard() {
  const [shown, setShown] = useState(1)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(aiLog.length)
      return
    }
    const id = setInterval(() => setShown((n) => (n >= aiLog.length ? 1 : n + 1)), 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="dash">
      <div className="dash-head">
        <span className="dash-title">Mimuads AI</span>
        <span className="pill pill-live">
          <span className="live-dot" /> Active
        </span>
      </div>
      <div className="dash-stats">
        <div>
          <strong>
            <Counter to={3247} />
          </strong>
          <span className="dash-label">Screens Live</span>
        </div>
        <div>
          <strong>
            <Counter to={30.2} decimals={1} suffix="M" />
          </strong>
          <span className="dash-label">Verified Views Today</span>
        </div>
        <div>
          <strong>
            <Counter to={98} />
            <small>/100</small>
          </strong>
          <span className="dash-label">AI Score</span>
        </div>
      </div>
      <div className="dash-progress">
        <div className="dash-progress-row">
          <span>Campaign performance</span>
          <span>97%</span>
        </div>
        <div className="bar">
          <span style={{ width: '97%' }} />
        </div>
      </div>
      <ol className="dash-log">
        {aiLog.map((l, i) => (
          <li key={l.t} className={i < shown ? 'is-shown' : ''}>
            <time>{l.t}</time>
            <span>{l.m}</span>
          </li>
        ))}
      </ol>
      <div className="dash-foot">
        <span className="dash-thinking">
          <span className="spinner" /> AI optimizing…
        </span>
        <span className="dash-cpv">
          ₦0.12<small>/ verified view</small>
        </span>
      </div>
    </div>
  )
}

export function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">AI Self-Serve Platform</span>
          <h2>
            Campaign intelligence, <em>built in.</em>
          </h2>
          <p>
            Mimuads is not an ad agency — it's an AI platform. Launch, optimize and measure your campaign from your
            phone, in minutes. The AI handles everything a media buyer would charge you for.
          </p>
        </div>

        <div className="bento">
          <div className="bento-dash reveal">
            <Dashboard />
          </div>
          {platformFeatures.map((f, i) => (
            <article key={f.title} className="card feature-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="icon-chip">
                <Icon name={f.icon} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
          <a href={links.signup} className="card card-cta reveal">
            <span>Launch a Campaign with AI</span>
            <span className="round-arrow">
              <Icon name="arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
