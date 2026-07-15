export type ButtonState = 'default' | 'hover'

interface ButtonProps {
  state?: ButtonState
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ state = 'default', children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className={`button button--${state}`} onClick={onClick}>
      {children}
    </button>
  )
}
