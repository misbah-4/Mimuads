import { useEffect, useState } from 'react'
import { links, nav } from '../content'
import { Icon, Logo } from './Icon'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="nav-bar">
        <a href="#top" aria-label="Mimuads home">
          <Logo size={22} />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-login" href={links.login}>
            Log in
          </a>
          <a className="btn btn-primary btn-sm" href={links.signup}>
            Start a campaign
          </a>
          <button className="icon-btn nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-sheet">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
              <Icon name="arrow" size={18} />
            </a>
          ))}
          <a className="btn btn-ghost" href={links.login}>
            Log in
          </a>
        </div>
      )}
    </header>
  )
}
