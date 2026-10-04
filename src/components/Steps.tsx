import { useEffect, useState } from 'react'
import { links, steps } from '../content'
import { Icon } from './Icon'
import { AdSlides } from './Illustrations'

function UploadScreen() {
  return (
    <>
      <div className="ps-head">
        <span>New campaign</span>
        <small>1 of 3</small>
      </div>
      <div className="ps-creative">
        <svg viewBox="0 0 158 95" preserveAspectRatio="xMidYMid slice">
          <AdSlides w={158} h={95} />
        </svg>
      </div>
      <div className="ps-row">
        <Icon name="play" size={16} /> promo-video.mp4 <small>15s</small>
      </div>
      <div className="ps-ok">
        <Icon name="shield" size={16} /> APCON check passed
      </div>
      <span className="ps-btn">Continue</span>
    </>
  )
}

function PickScreen() {
  const pins = [
    [34, 30],
    [58, 52],
    [74, 26],
    [26, 66],
    [48, 78],
    [80, 70],
  ]
  return (
    <>
      <div className="ps-head">
        <span>Choose screens</span>
        <small>2 of 3</small>
      </div>
      <div className="ps-map">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 Q40 30 100 48M30 0 Q38 50 22 100M62 0 Q70 60 90 100" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
        {pins.map(([x, y], i) => (
          <span key={i} className="ps-pin" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
      <div className="ps-chips">
        <span className="on">Pharmacies</span>
        <span className="on">Eateries</span>
        <span>Salons</span>
      </div>
      <div className="ps-row">
        <strong>238 screens</strong> <small>Yaba · Ikeja · Surulere</small>
      </div>
      <span className="ps-btn">Continue</span>
    </>
  )
}

function LiveScreen() {
  return (
    <>
      <div className="ps-head">
        <span>
          <span className="live-dot" /> Campaign live
        </span>
        <small>Today</small>
      </div>
      <div className="ps-stat">
        <small>Verified views</small>
        <strong>12,480</strong>
        <span className="up">↑ 18% vs yesterday</span>
      </div>
      <div className="ps-bars">
        {[30, 44, 38, 56, 62, 54, 78, 92].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="ps-row">
        Screens live <b>238</b>
      </div>
      <div className="ps-row">
        Top venue <b>Pharmacy, Yaba</b>
      </div>
    </>
  )
}

const screens = [UploadScreen, PickScreen, LiveScreen]

export function PhoneScreen({ index }: { index: number }) {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        {screens.map((S, i) => (
          <div key={i} className={`ps ${i === index ? 'is-active' : ''}`} aria-hidden={i !== index}>
            <S />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Steps() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 3800)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="section" id="how">
      <div className="container split">
        <div className="split-copy">
          <h2 className="reveal">
            Live in three steps. <em>No agency.</em>
          </h2>
          <ol className="steps" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <button className={`step ${i === active ? 'is-active' : ''}`} onClick={() => setActive(i)} aria-pressed={i === active}>
                  <span className="step-n">{i + 1}</span>
                  <span>
                    <strong>{s.title}</strong>
                    <span className="step-body">{s.body}</span>
                  </span>
                  {i === active && !paused && <span className="step-timer" key={active} />}
                </button>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary btn-lg reveal" href={links.signup}>
            Start a campaign <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="stage stage-clay reveal">
          <PhoneScreen index={active} />
        </div>
      </div>
    </section>
  )
}
