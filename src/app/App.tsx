import Label from './components/Label'
import Field from './components/Field'
import Checkbox from './components/Checkbox'
import Link from './components/Link'
import Button from './components/Button'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 p-4 sm:p-10">
      <section className="showcase-card w-full max-w-md flex flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10">
        <div className="text-center pb-3">
          <h1 className="text-lg font-medium">Kit de entrega de componentes</h1>
          <p className="showcase-subtitle text-sm">Por: Ana Priscilla F.</p>
        </div>

        <div className="flex flex-col gap-2">
          <Label state="default">Label — Default</Label>
          <Label state="focus">Label — Focus</Label>
          <Label state="error">Label — Error</Label>
        </div>

        <div className="flex flex-col gap-3">
          <Field id="field-default" variant="login" label="Usuário" placeholder="seu.usuario" state="default" />
          <Field id="field-focus" variant="login" label="Usuário" placeholder="seu.usuario" state="focus" />
          <Field id="field-error" variant="login" label="Usuário" placeholder="seu.usuario" state="error" helperText="Usuário inválido" />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Checkbox id="checkbox-default" label="Lembrar-me" />
          <Checkbox id="checkbox-checked" label="Lembrar-me" defaultChecked />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button state="default">ENTRAR</Button>
          <Button state="hover">ENTRAR</Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link state="default">Esqueceu a senha?</Link>
          <Link state="hover">Esqueceu a senha?</Link>
        </div>
      </section>

      <section className="showcase-card w-full max-w-md flex flex-col gap-5 px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-lg font-medium text-center pb-3">Teste os componentes</h2>

        <Field id="username" variant="login" label="Usuário" placeholder="seu.usuario" />
        <Field id="password" variant="password" label="Senha" placeholder="••••••••" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Checkbox id="remember" label="Lembrar-me" />
          <Link href="#">Esqueceu a senha?</Link>
        </div>
        <Button type="submit">ENTRAR</Button>
      </section>
    </div>
  )
}
