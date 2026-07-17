document.querySelectorAll('[data-toggle-password]').forEach((button) => {
  button.addEventListener('click', () => {
    const field = button.closest('.field-content')
    const input = field.querySelector('input')
    const eye = button.querySelector('.icon-eye')
    const eyeSlash = button.querySelector('.icon-eye-slash')
    const isHidden = input.type === 'password'

    input.type = isHidden ? 'text' : 'password'
    eye.toggleAttribute('hidden', isHidden)
    eyeSlash.toggleAttribute('hidden', !isHidden)
    button.setAttribute('aria-label', isHidden ? 'Ocultar senha' : 'Mostrar senha')
  })
})

function setFieldError(field, hasError, message) {
  const label = field.querySelector('.label')
  const content = field.querySelector('.field-content')
  const helper = field.querySelector('.field-helper-text')

  label.classList.toggle('label--error', hasError)
  label.classList.toggle('label--default', !hasError)
  content.classList.toggle('field-content--error', hasError)
  content.classList.toggle('field-content--default', !hasError)
  if (helper) {
    if (hasError && message) helper.textContent = message
    helper.toggleAttribute('hidden', !hasError)
  }
}

document.querySelectorAll('[data-field]').forEach((field) => {
  const input = field.querySelector('input')
  const isPassword = field.dataset.field === 'password'

  input.addEventListener('input', () => {
    if (isPassword && input.value.includes('#')) {
      setFieldError(field, true, 'Senha incorreta')
    } else {
      setFieldError(field, false)
    }
  })
})

const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.querySelectorAll('[data-field]').forEach((field) => {
      const input = field.querySelector('input')
      const isPassword = field.dataset.field === 'password'

      if (isPassword && input.value.includes('#')) {
        setFieldError(field, true, 'Senha incorreta')
      } else if (input.value.trim() === '') {
        setFieldError(field, true, isPassword ? 'Senha incorreta' : 'Usuário inválido')
      } else {
        setFieldError(field, false)
      }
    })
  })
}
