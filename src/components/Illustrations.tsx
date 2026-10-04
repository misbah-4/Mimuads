/* Original flat illustrations in the Mimuads palette. */

const C = {
  clay: '#B55430',
  moss: '#2B7244',
  gold: '#D9803A',
  ink: '#0E0D0B',
  glass: '#2B2622',
  wall: '#FFF6EE',
  shade: '#F0E2D6',
  cream: '#F4EDE4',
}

type Kind = 'pharmacy' | 'eatery' | 'salon'

const SHOPS: Record<Kind, { label: string; color: string }> = {
  pharmacy: { label: 'PHARMACY', color: C.moss },
  eatery: { label: 'EATERY', color: C.clay },
  salon: { label: 'SALON', color: C.gold },
}

/** Three ad slides that cross-fade on a loop. `offset` staggers shops. */
export function AdSlides({ w, h, offset = 0 }: { w: number; h: number; offset?: number }) {
  const d = (n: number) => ({ animationDelay: `${n - offset}s` })
  const s = h / 95
  return (
    <g>
      <g className="ad" style={d(0)}>
        <rect width={w} height={h} fill={C.clay} />
        <circle cx={w * 0.82} cy={h * 0.2} r={h * 0.5} fill="#C8653F" />
        <text x={w * 0.1} y={h * 0.52} fill="#fff" fontSize={26 * s} fontWeight="700" letterSpacing="-1">
          20% OFF
        </text>
        <text x={w * 0.1} y={h * 0.74} fill="#FFE1CF" fontSize={10 * s}>
          This week only
        </text>
      </g>
      <g className="ad" style={d(-6)}>
        <rect width={w} height={h} fill={C.moss} />
        <rect x={w * 0.66} y={h * 0.22} width={w * 0.16} height={h * 0.6} rx={6 * s} fill={C.cream} />
        <rect x={w * 0.69} y={h * 0.14} width={w * 0.1} height={h * 0.1} rx={2 * s} fill={C.gold} />
        <rect x={w * 0.66} y={h * 0.42} width={w * 0.16} height={h * 0.16} fill={C.gold} />
        <text x={w * 0.1} y={h * 0.5} fill="#fff" fontSize={24 * s} fontWeight="700" letterSpacing="-1">
          NEW
        </text>
        <text x={w * 0.1} y={h * 0.7} fill="#CFE8D7" fontSize={10 * s}>
          Now in Yaba
        </text>
      </g>
      <g className="ad" style={d(-3)}>
        <rect width={w} height={h} fill={C.ink} />
        <circle cx={w} cy={h} r={h * 0.9} fill={C.clay} opacity="0.45" />
        <text x={w * 0.1} y={h * 0.46} fill={C.cream} fontSize={17 * s} fontWeight="700" letterSpacing="-0.5">
          Your brand
        </text>
        <text x={w * 0.1} y={h * 0.7} fill="#FFB48F" fontSize={17 * s} fontStyle="italic" fontWeight="300">
          here.
        </text>
      </g>
    </g>
  )
}

function Products({ kind }: { kind: Kind }) {
  if (kind === 'pharmacy')
    return (
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${38 + i * 28} 288)`}>
            <rect width="18" height="30" rx="4" fill={[C.cream, C.gold, '#9FD1AE'][i % 3]} />
            <rect x="4" y="-6" width="10" height="7" rx="2" fill={C.shade} />
          </g>
        ))}
      </g>
    )
  if (kind === 'eatery')
    return (
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${44 + i * 56} 300)`}>
            <path d="M0 0h44a22 18 0 0 1-44 0Z" fill={[C.cream, C.gold, '#F1B48F'][i]} />
            <ellipse cx="22" cy="0" rx="22" ry="4" fill={C.shade} />
          </g>
        ))}
      </g>
    )
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${42 + i * 34} ${282 + (i % 2) * 8})`}>
          <rect width="14" height={36 - (i % 2) * 8} rx="5" fill={[C.cream, '#F1B48F', C.gold][i % 3]} />
          <rect x="3" y="-5" width="8" height="6" rx="2" fill={C.ink} opacity="0.7" />
        </g>
      ))}
    </g>
  )
}

/** One storefront, 330×360, drawn at the origin. */
export function Storefront({ kind, offset = 0 }: { kind: Kind; offset?: number }) {
  const { label, color } = SHOPS[kind]
  const stripes = Array.from({ length: 10 }, (_, i) => i)
  return (
    <g>
      <rect x="-8" y="0" width="346" height="24" rx="8" fill={C.shade} />
      <rect x="0" y="16" width="330" height="344" fill={C.wall} />
      <rect x="40" y="36" width="250" height="44" rx="12" fill={C.ink} />
      <circle cx="66" cy="58" r="9" fill={color} />
      <text x="176" y="64.5" textAnchor="middle" fill={C.cream} fontSize="17" fontWeight="700" letterSpacing="3">
        {label}
      </text>
      <rect x="-6" y="92" width="342" height="10" rx="5" fill={C.ink} opacity="0.85" />
      {stripes.map((i) => (
        <g key={i} fill={i % 2 ? C.wall : color}>
          <rect x={i * 33} y="100" width="33" height="28" />
          <circle cx={i * 33 + 16.5} cy="128" r="16.5" />
        </g>
      ))}
      {/* window with screen */}
      <rect x="20" y="156" width="196" height="186" rx="10" fill={C.glass} />
      <path d="M150 156h40l-110 186H40Z" fill="#fff" opacity="0.04" />
      <rect x="34" y="170" width="168" height="105" rx="7" fill={C.ink} />
      <svg x="39" y="175" width="158" height="95" viewBox="0 0 158 95">
        <AdSlides w={158} h={95} offset={offset} />
      </svg>
      <circle cx="118" cy="173" r="1.6" fill="#3CCF6E" />
      <Products kind={kind} />
      <rect x="30" y="318" width="176" height="6" rx="3" fill="#4A423B" />
      {/* door */}
      <rect x="232" y="156" width="82" height="204" rx="8" fill={color} />
      <rect x="242" y="168" width="62" height="118" rx="5" fill={C.glass} />
      <circle cx="294" cy="306" r="4" fill={C.cream} />
      <rect x="224" y="354" width="98" height="6" rx="3" fill={C.ink} opacity="0.25" />
    </g>
  )
}

/** Hero street scene: three shops with live screens. */
export function ShopStreet() {
  return (
    <svg className="street" viewBox="0 0 1200 470" role="img" aria-label="Digital screens running ads inside a pharmacy, an eatery and a salon">
      <g transform="translate(45 80)">
        <Storefront kind="pharmacy" offset={0} />
      </g>
      <g transform="translate(435 80)">
        <Storefront kind="eatery" offset={1} />
      </g>
      <g transform="translate(825 80)">
        <Storefront kind="salon" offset={2} />
      </g>
      <rect x="0" y="440" width="1200" height="30" fill={C.ink} opacity="0.14" />
      <rect x="0" y="440" width="1200" height="4" fill={C.ink} opacity="0.12" />
    </svg>
  )
}

/** Single shop for audience cards. */
export function ShopSingle({ kind }: { kind: Kind }) {
  return (
    <svg className="shop-single" viewBox="-20 -10 370 390" aria-hidden="true">
      <Storefront kind={kind} offset={kind === 'salon' ? 2 : 0} />
      <rect x="-20" y="360" width="370" height="20" fill={C.ink} opacity="0.14" />
    </svg>
  )
}

/** A network of screens for the agencies card. */
export function ScreenNetwork() {
  const cells = Array.from({ length: 12 }, (_, i) => i)
  return (
    <svg className="network" viewBox="0 0 360 250" aria-hidden="true">
      {cells.map((i) => {
        const x = (i % 4) * 90 + 8
        const y = Math.floor(i / 4) * 82 + 8
        const lit = [0, 2, 5, 7, 8, 10].includes(i)
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width="74" height="50" rx="8" fill={lit ? C.clay : '#26231F'} />
            {lit ? (
              <>
                <rect x="10" y="12" width="34" height="7" rx="3.5" fill={C.cream} />
                <rect x="10" y="25" width="22" height="5" rx="2.5" fill="#FFB48F" />
              </>
            ) : (
              <rect x="10" y="12" width="30" height="6" rx="3" fill="#3A3530" />
            )}
            <rect x="31" y="54" width="12" height="6" rx="2" fill="#3A3530" />
          </g>
        )
      })}
    </svg>
  )
}
