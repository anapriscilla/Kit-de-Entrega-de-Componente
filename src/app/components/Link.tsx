import { useState } from 'react'
import Label from './Label'

export type LinkState = 'default' | 'hover'

interface LinkProps {
  state?: LinkState
  children: React.ReactNode
  href?: string
}

export default function Link({ state, children, href = '#' }: LinkProps) {
  const [hovered, setHovered] = useState(false)
  const resolvedState = state ?? (hovered ? 'hover' : 'default')

  return (
    <a
      href={href}
      className={`link link--${resolvedState}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Label state={resolvedState === 'hover' ? 'focus' : 'default'}>{children}</Label>
    </a>
  )
}
