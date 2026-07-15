export type LabelState = 'default' | 'focus' | 'error'

interface LabelProps {
  state?: LabelState
  children: React.ReactNode
}

export default function Label({ state = 'default', children }: LabelProps) {
  return <span className={`label label--${state}`}>{children}</span>
}
