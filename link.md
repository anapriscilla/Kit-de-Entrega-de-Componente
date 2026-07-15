\
# Link

Texto interativo para navegação ou ações secundárias dentro do fluxo, como "Esqueceu a senha?".

## Estrutura

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

## Anatomia

```
Link
└─ Label   → "Esqueceu a senha?"
```

Sem `Container` — a área de clique é o próprio texto, diferente do `Button`.

## 1. O que já existe

- Componente: `Link` (Component Set, property `State`)
- No hover, o texto sublinha e muda de `text-primay` para `content-action` — ver `tokens.md`
- Descrição já publicada no campo Description do componente, no Figma

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Usar para navegação ou ação secundária — nunca para a ação principal da tela.
- Deixar o sublinhado como único reforço visual do hover, sem adicionar fundo ou borda.

**Nunca fazer:**
- Não colocar `Container` ou padding fixo em volta — isso o transformaria em um `Button` disfarçado.
- Não usar `content-action` fora do estado hover, a não ser que o contexto realmente peça (como já acontece no `Field`, no estado de foco).

## 3. O que fazer quando algo não existe

- **Precisa de um Link visitado ou desabilitado?** Adicione como nova variante de `State`, reaproveitando tons já existentes (ex.: `text-value` para desabilitado).

