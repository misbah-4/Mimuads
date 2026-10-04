import { steps } from '../content'

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head section-head-center reveal">
          <span className="eyebrow">How it Works</span>
          <h2>
            Simple. Fast. <em>Live.</em>
          </h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.n} className="step reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="step-line" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
