\
# Button

Botão de ação principal do formulário, como "Entrar".

## Estrutura

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

## Anatomia

```
Button
└─ Container
   └─ Label   → "ENTRAR"
```

## 1. O que já existe

- Componente: `Button` (Component Set, property `State`)
- Sombra do hover já existe como Effect Style `elevation/hover` — sombra no Figma vive em Effects/Styles, não em Variables, por isso não aparece na lista de tokens de cor (ver `tokens.md`)
- Descrição já publicada no campo Description do componente, no Figma

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Reservar para a ação principal da tela — um por formulário.
- Aplicar `elevation/hover` sempre que o botão tiver hover, para dar profundidade sutil.

**Nunca fazer:**
- Não criar um componente `Button Ghost` separado — variações mais discretas (Ghost, Secondary) devem ser novas variantes de `Type` dentro deste mesmo componente.
- Não aplicar cor de fundo manual — sempre `content-action`/`content-action-hover`.

## 3. O que fazer quando algo não existe

- **Precisa de `Disabled`?** Nova variante de `State`, reaproveitando `content-action` com opacidade reduzida.
- **Precisa de uma variação secundária/discreta?** Nova variante da property `Type` (ex.: `Type=Primary|Ghost`) — não um componente novo.

## Pendência

- `radius-field` está sendo reaproveitado aqui vindo do Field — considerar renomear para algo mais neutro como `radius-md`, já que é compartilhado entre famílias diferentes (ver `tokens.md`).

## Resolvido

- O padding (antes fixo e assimétrico só no `Hover`) agora usa os mesmos tokens do `Field` nos dois estados: `spacing-field-padding-x` e `spacing-field-padding-y`. Nenhum token novo — só reaproveitamento.
