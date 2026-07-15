export type IconName = 'user' | 'lock' | 'eye' | 'eye-slash'

interface IconProps {
  name: IconName
  className?: string
}

const paths: Record<IconName, JSX.Element> = {
  user: (
    <>
      <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </>
  ),
  lock: (
    <>
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </>
  ),
  eye: (
    <>
      <path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </>
  ),
  'eye-slash': (
    <>
      <path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M2.5 13.5 13.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
}

export default function Icon({ name, className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={`icon ${className}`.trim()} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
