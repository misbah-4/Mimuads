import { useEffect, useState } from 'react'
import { links, nav } from '../content'
import { useTheme } from '../hooks'
import { Icon, Logo } from './Icon'

export function Nav() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-bar">
        <a href="#top" className="nav-logo" aria-label="Mimuads home">
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
          <button className="icon-btn" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <Icon name={dark ? 'sun' : 'moon'} size={18} />
          </button>
          <a className="nav-login" href={links.login}>
            Log in
          </a>
          <a className="btn btn-primary btn-sm nav-cta" href={links.signup}>
            Start a Campaign
          </a>
          <button className="icon-btn nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div className="nav-sheet" hidden={!open}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
            <Icon name="arrow" size={18} />
          </a>
        ))}
        <div className="nav-sheet-actions">
          <a className="btn btn-ghost" href={links.login}>
            Log in
          </a>
          <a className="btn btn-primary" href={links.signup}>
            Start a Campaign
          </a>
        </div>
      </div>
    </header>
  )
}
