import { useState } from 'react'
import Label from './Label'
import Icon from './Icon'

export type FieldVariant = 'login' | 'password'
export type FieldState = 'default' | 'focus' | 'error'

interface FieldProps {
  variant: FieldVariant
  label: string
  state?: FieldState
  placeholder?: string
  helperText?: string
  id: string
}

export default function Field({ variant, label, state, placeholder, helperText, id }: FieldProps) {
  const [visible, setVisible] = useState(false)
  const [focused, setFocused] = useState(false)
  const isPassword = variant === 'password'
  const inputType = isPassword && !visible ? 'password' : 'text'
  const resolvedState = state ?? (focused ? 'focus' : 'default')

  return (
    <div className="field">
      <Label state={resolvedState}>{label}</Label>
      <div className={`field-content field-content--${resolvedState}`}>
        <Icon name={isPassword ? 'lock' : 'user'} />
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="field-input"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isPassword && (
          <button
            type="button"
            className="field-trailing"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          >
            <Icon name={visible ? 'eye-slash' : 'eye'} />
          </button>
        )}
      </div>
      {resolvedState === 'error' && helperText && <p className="field-helper-text">{helperText}</p>}
    </div>
  )
}
