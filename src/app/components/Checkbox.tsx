import { useState } from 'react'
import Label from './Label'

interface CheckboxProps {
  label: string
  id: string
  defaultChecked?: boolean
}

export default function Checkbox({ label, id, defaultChecked = false }: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox-native"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className={`checkbox-box ${checked ? 'checkbox-box--checked' : ''}`.trim()}>
        {checked && (
          <svg viewBox="0 0 10 10" className="checkbox-mark" aria-hidden="true">
            <path d="M1.5 5.2 4 7.7 8.5 2.3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <Label>{label}</Label>
    </label>
  )
}
