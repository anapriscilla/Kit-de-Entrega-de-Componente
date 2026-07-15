\
# Field

Campo de texto usado em formulários de autenticação da intranet. Tem duas variações de componente — `Field / Login` e `Field / Password` — que compartilham a mesma anatomia e os mesmos tokens, diferindo apenas em quais estados e ícones cada uma expõe.

## Estrutura

```json
{
  "name": "Field",
  "variants": ["Field / Login", "Field / Password"],
  "properties": {
    "Field / Login": { "state": ["Default", "Focus", "Error"] },
    "Field / Password": { "state": ["Default", "Focus", "Lock", "Open", "Error"] }
  },
  "tokens": {
    "background": "bg-field",
    "border": {
      "default": "border-default",
      "focus": "content-action",
      "error": "content-error"
    },
    "borderWidth": "border-width-default",
    "radius": "radius-field",
    "paddingX": "spacing-field-padding-x",
    "paddingY": "spacing-field-padding-y",
    "gap": "spacing-field-gap",
    "labelText": {
      "default": "text-primay",
      "focus": "content-action",
      "error": "content-error"
    },
    "valueText": "text-value",
    "helperText": "content-error",
    "icon": "icon",
    "inputFontSize": "font-size-input"
  },
  "anatomy": ["Label", "Content", "Icon/Leading", "Input", "Icon/Trailing", "HelperText"]
}
```

## Anatomia (camadas)

```
Field / Login | Field / Password
├─ Label            → instância do componente Label (State acompanha o Field)
├─ Content           → a caixa com borda (fill, stroke, radius, padding — todos por token)
│  ├─ Icon/Leading   → instância de Icon/User (Login) ou Icon/Lock (Password)
│  ├─ Input          → texto do valor/placeholder
│  └─ Icon/Trailing  → só existe em Field / Password, no estado Open (instância de Icon/Eye ou Icon/EyeSlash)
└─ HelperText        → mensagem de erro, visível só quando State=Error
```

> Nota: a camada que envolve Label+Content+HelperText está nomeada `Field` internamente — mesmo nome do componente raiz. Vale renomear para algo distinto (ex.: `Group`) numa próxima revisão, para não colidir com o nome da família.

## 1. O que já existe

- Componentes: `Field / Login` (Component Set, property `State`) e `Field / Password` (Component Set, property `State`) — agrupados no Figma pelo prefixo `Field /`
- Ícones usados como instância: `Icon/User`, `Icon/Lock`, `Icon/Eye`, `Icon/EyeSlash` — ver `icons.md`
- Tokens: ver `tokens.md` — cores (`bg-field`, `border-default`, `content-action`, `content-error`, `text-primay`, `text-value`, `icon`), espaçamento (`spacing-field-gap`, `spacing-field-padding-x`, `spacing-field-padding-y`), radius (`radius-field`) e largura de borda (`border-width-default`)
- Descrição já publicada no campo Description dos dois componentes, no Figma

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Sempre acompanhar o `Field` de uma instância do componente `Label` — nunca soltar o campo sem rótulo.
- Usar `Field / Password` apenas para conteúdo sensível (senha). Para qualquer outro texto (usuário, e-mail, busca), usar `Field / Login`.
- Trocar a property `State` do `Field` e do `Label` juntos, de forma sincronizada (os dois devem sempre refletir o mesmo estado).
- Aplicar cor, borda, radius e espaçamento sempre via token — nunca valor fixo.

**Nunca fazer:**
- Não usar `Field / Password` para campos que não escondem informação — o toggle de mostrar/ocultar (`Icon/Trailing`) não faz sentido fora desse contexto.
- Não remover o `Icon/Leading` sem validação de UX — ele é a principal pista visual do tipo de campo antes do usuário ler o Label.
- Não misturar o token `content-action` (cor de ação/foco) com `content-error` no mesmo estado — são conceitos que nunca coexistem.
- Não redimensionar a fonte do `Input` manualmente — sempre o token `font-size-input` (16px).

## 3. O que fazer quando algo não existe

- **Precisa de um novo estado** (ex.: `Disabled`)? Crie como nova variante de `State`, reaproveitando os tokens de cor existentes com opacidade reduzida — não invente uma cor nova.
- **Precisa de um novo ícone leading** (ex.: campo de e-mail)? Crie um novo componente `Icon/[Nome]` seguindo o padrão da biblioteca (ver `icons.md`) e use-o via Instance Swap dentro do `Icon/Leading` — nunca cole uma imagem solta dentro do Field.
- **Precisa de um `Field` para um tipo de dado totalmente novo** (ex.: campo numérico, campo de busca)? Não force dentro de `Field / Login` ou `Field / Password` — documente como uma terceira variante da família `Field /`, reaproveitando a mesma anatomia e os mesmos tokens.
- **O texto do Label não cabe no espaço disponível?** Priorize quebra de linha do `Content` antes de reduzir a fonte do Label.

## Pendência

- Em `Field / Password`, o ícone à direita está nomeado `Icon/Eye` em 4 dos 5 estados (Default, Lock, Focus, Error) e só `Icon/Trailing` no estado `Open`. É o mesmo papel (ícone à direita) em todos — precisa ficar consistente como `Icon/Trailing` nos 5 estados.
