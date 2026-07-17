\
# Outros componentes

Documentam o restante do `LoginForm` como showcase do sistema completo: `Checkbox`, `Link`, `Button` e a biblioteca de ícones (`Icon/*`). O par obrigatório da entrega (`Label` + `Field`) está em `label.md` e `input.md`.

## Checkbox

Caixa de seleção usada para escolhas binárias (marcado/desmarcado), como "Lembrar-me" no formulário de login.

### Estrutura

```json
{
  "name": "Checkbox",
  "properties": {
    "state": ["Default", "Check"]
  },
  "tokens": {
    "labelText": "text-primay",
    "gap": "spacing-field-gap",
    "padding": "spacing-tap-padding",
    "container": {
      "border": "border-default",
      "background": "bg-field",
      "checkedBackground": "content-action",
      "checkMark": "white",
      "radius": "radius-fiel-checkbox"
    }
  },
  "anatomy": ["Container", "Label"]
}
```

> Nota: `Container` era uma imagem no Figma (arte própria por estado), sem tokens associados. Para virar código, ele passou a ser desenhado reaproveitando tokens que já existiam no kit — nenhuma cor nova foi criada.

### Anatomia

```
Checkbox
├─ Container   → a caixinha; a arte já muda entre vazia e marcada (uma imagem por estado, não usa um Icon/Check separado)
└─ Label       → "Lembrar-me"
```

### 1. O que já existe

- Componente: `Checkbox` (Component Set, property `State`)
- Reaproveita `spacing-field-gap` do Field para o gap entre a caixa e o texto, e `text-primay` para o texto — ver `tokens.md`
- Descrição já publicada no campo Description do componente, no Figma

### 2. O que fazer / o que nunca fazer

**Fazer:**
- Sempre usar ao lado de um `Label` descrevendo a ação.
- Trocar `State` para `Check` apenas em resposta à interação do usuário.

**Nunca fazer:**
- Não usar para selecionar mais de uma opção dentro de um grupo sem revisar o padrão — este componente foi pensado para uma escolha isolada, tipo "Lembrar-me", não para uma lista de opções.
- Não aplicar cor manual no texto — sempre `text-primay`.

### 3. O que fazer quando algo não existe

- **Precisa de um estado `Indeterminate`?** Crie como nova variante de `State`, mantendo a mesma lógica de imagem-por-estado usada em `Default`/`Check`.
- **Precisa de um grupo de checkboxes com título?** Documente como um novo componente composto (ex.: `CheckboxGroup`) — não force essa estrutura dentro deste componente.

## Link

Texto interativo para navegação ou ações secundárias dentro do fluxo, como "Esqueceu a senha?".

### Estrutura

```json
{
  "name": "Link",
  "properties": {
    "state": ["Default", "Hover"]
  },
  "tokens": {
    "text": {
      "Default": "text-primay",
      "Hover": "content-action"
    },
    "padding": "spacing-tap-padding"
  },
  "anatomy": ["Label"]
}
```

### Anatomia

```
Link
└─ Label   → "Esqueceu a senha?"
```

Sem `Container` — a área de clique é o próprio texto, diferente do `Button`.

### 1. O que já existe

- Componente: `Link` (Component Set, property `State`)
- No hover, o texto sublinha e muda de `text-primay` para `content-action` — ver `tokens.md`
- Descrição já publicada no campo Description do componente, no Figma

### 2. O que fazer / o que nunca fazer

**Fazer:**
- Usar para navegação ou ação secundária — nunca para a ação principal da tela.
- Deixar o sublinhado como único reforço visual do hover, sem adicionar fundo ou borda.

**Nunca fazer:**
- Não colocar `Container` ou padding fixo em volta — isso o transformaria em um `Button` disfarçado.
- Não usar `content-action` fora do estado hover, a não ser que o contexto realmente peça (como já acontece no `Field`, no estado de foco — ver `input.md`).

### 3. O que fazer quando algo não existe

- **Precisa de um Link visitado ou desabilitado?** Adicione como nova variante de `State`, reaproveitando tons já existentes (ex.: `text-value` para desabilitado).

## Button

Botão de ação principal do formulário, como "Entrar".

### Estrutura

```json
{
  "name": "Button",
  "properties": {
    "state": ["Default", "Hover"]
  },
  "tokens": {
    "background": {
      "Default": "content-action",
      "Hover": "content-action-hover"
    },
    "text": "white",
    "radius": "radius-field",
    "shadow": { "Hover": "elevation/hover" }
  },
  "anatomy": ["Container", "Label"]
}
```

### Anatomia

```
Button
└─ Container
   └─ Label   → "ENTRAR"
```

### 1. O que já existe

- Componente: `Button` (Component Set, property `State`)
- Sombra do hover já existe como Effect Style `elevation/hover` — sombra no Figma vive em Effects/Styles, não em Variables, por isso não aparece na lista de tokens de cor (ver `tokens.md`)
- Descrição já publicada no campo Description do componente, no Figma

### 2. O que fazer / o que nunca fazer

**Fazer:**
- Reservar para a ação principal da tela — um por formulário.
- Aplicar `elevation/hover` sempre que o botão tiver hover, para dar profundidade sutil.

**Nunca fazer:**
- Não criar um componente `Button Ghost` separado — variações mais discretas (Ghost, Secondary) devem ser novas variantes de `Type` dentro deste mesmo componente.
- Não aplicar cor de fundo manual — sempre `content-action`/`content-action-hover`.

### 3. O que fazer quando algo não existe

- **Precisa de `Disabled`?** Nova variante de `State`, reaproveitando `content-action` com opacidade reduzida.
- **Precisa de uma variação secundária/discreta?** Nova variante da property `Type` (ex.: `Type=Primary|Ghost`) — não um componente novo.

### Pendência

- `radius-field` está sendo reaproveitado aqui vindo do Field — considerar renomear para algo mais neutro como `radius-md`, já que é compartilhado entre famílias diferentes (ver `tokens.md`).

### Resolvido

- O padding (antes fixo e assimétrico só no `Hover`) agora usa os mesmos tokens do `Field` nos dois estados: `spacing-field-padding-x` e `spacing-field-padding-y`. Nenhum token novo — só reaproveitamento.
- A altura do `Button` estava variando com o padding. Agora é fixa via token `button-height` (`44px`), batendo com o Figma — ver `tokens.md`.

## Icons

Biblioteca de ícones simples, usados como instância dentro dos slots `Icon/Leading` e `Icon/Trailing` de outros componentes (principalmente o `Field` — ver `input.md`).

### Estrutura

```json
{
  "family": "Icon",
  "members": ["Icon/User", "Icon/Lock", "Icon/Eye", "Icon/EyeSlash"],
  "tokens": { "fill": "icon" },
  "size": "16x16"
}
```

### 1. O que já existe

- `Icon/User` — usado no `Icon/Leading` do `Field / Login`
- `Icon/Lock` — usado no `Icon/Leading` do `Field / Password`
- `Icon/Eye` — usado no `Icon/Trailing` do `Field / Password`, nos estados com a senha oculta
- `Icon/EyeSlash` — usado no `Icon/Trailing` do `Field / Password`, no estado `Open` (senha visível)

Nenhum ícone tem property própria — a variação acontece no componente que os usa, via Instance Swap.

### 2. O que fazer / o que nunca fazer

**Fazer:**
- Nomear qualquer novo ícone como `Icon/[Identidade]` — o que ele representa, não onde é usado.
- Usar sempre como instância dentro de um slot já nomeado por posição (`Icon/Leading`/`Icon/Trailing`) — o nome do slot descreve o papel; o nome do ícone-mestre descreve o conteúdo.

**Nunca fazer:**
- Não nomear um ícone pela posição onde ele vai ser usado (ex.: não crie um ícone-mestre chamado `Icon/Leading` — isso já aconteceu uma vez neste projeto e foi corrigido).
- Não colar uma imagem solta no lugar de uma instância — isso quebra a possibilidade de Instance Swap.

### 3. O que fazer quando algo não existe

- **Precisa de um ícone novo** (ex.: e-mail, calendário)? Crie como `Icon/[Nome]`, 16x16, seguindo o padrão visual dos existentes, e adicione como opção no Instance Swap do slot correspondente.

### Nota sobre o Checkbox

O ícone de check do `Checkbox` não faz parte desta família — a marca de check já vem embutida na própria arte do `Container` (uma imagem para vazio, outra para marcado), em vez de ser uma instância separada de `Icon/Check`. É uma decisão válida (comum em bibliotecas que preferem a marca "colada" no contêiner para garantir alinhamento pixel-perfect), só não é intercambiável com o Instance Swap do jeito que os ícones do `Field` são.
