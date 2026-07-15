\
# Checkbox

Caixa de seleção usada para escolhas binárias (marcado/desmarcado), como "Lembrar-me" no formulário de login.

## Estrutura

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

## Anatomia

```
Checkbox
├─ Container   → a caixinha; a arte já muda entre vazia e marcada (uma imagem por estado, não usa um Icon/Check separado)
└─ Label       → "Lembrar-me"
```

## 1. O que já existe

- Componente: `Checkbox` (Component Set, property `State`)
- Reaproveita `spacing-field-gap` do Field para o gap entre a caixa e o texto, e `text-primay` para o texto — ver `tokens.md`
- Descrição já publicada no campo Description do componente, no Figma

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Sempre usar ao lado de um `Label` descrevendo a ação.
- Trocar `State` para `Check` apenas em resposta à interação do usuário.

**Nunca fazer:**
- Não usar para selecionar mais de uma opção dentro de um grupo sem revisar o padrão — este componente foi pensado para uma escolha isolada, tipo "Lembrar-me", não para uma lista de opções.
- Não aplicar cor manual no texto — sempre `text-primay`.

## 3. O que fazer quando algo não existe

- **Precisa de um estado `Indeterminate`?** Crie como nova variante de `State`, mantendo a mesma lógica de imagem-por-estado usada em `Default`/`Check`.
- **Precisa de um grupo de checkboxes com título?** Documente como um novo componente composto (ex.: `CheckboxGroup`) — não force essa estrutura dentro deste componente.

