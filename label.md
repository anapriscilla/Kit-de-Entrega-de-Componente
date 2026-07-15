\
# Label

Rótulo de texto usado acima de campos de formulário. Indica o que o usuário deve preencher e reflete visualmente o estado do campo ao qual está associado.

## Estrutura

```json
{
  "name": "Label",
  "properties": {
    "state": ["Default", "Focus", "Error"]
  },
  "tokens": {
    "text": {
      "Default": "text-primay",
      "Focus": "content-action",
      "Error": "content-error"
    }
  },
  "anatomy": ["Text"]
}
```

> Nota: o token `text-primay` está grafado assim no arquivo (typo de "primary"). Mantido aqui de propósito — precisa bater com o nome real da variable no Figma. Ver `tokens.md` para a lista completa e as pendências de nomenclatura.

## 1. O que já existe

- Componente: `Label` (Component Set no Figma, property `State`)
- Tokens de cor usados: `text-primay`, `content-action`, `content-error` — ver `tokens.md`
- Onde é usado: dentro de `Field / Login`, `Field / Password` e `Checkbox` (sempre como instância, nunca duplicado)
- Descrição já publicada no campo Description do componente, no Figma

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Sempre inserir uma instância do componente `Label` — nunca um texto solto recriando o mesmo visual.
- Trocar a property `State` do Label para acompanhar o estado do campo associado: `Focus` quando o campo está em foco, `Error` quando o campo está com erro, `Default` no resto do tempo.

**Nunca fazer:**
- Não aplicar cor de texto manualmente por cima da instância — sempre usar os tokens listados acima.
- Não usar o `Label` para texto de apoio ou mensagem de erro abaixo do campo — esse papel é do `HelperText`, um conceito diferente.

## 3. O que fazer quando algo não existe

- **Precisa de um estado novo** (ex.: `Disabled`)? Crie como nova variante de `State`, reaproveitando os tokens de cor existentes com opacidade reduzida (ex.: `text-primay` a 40%) — não crie uma cor nova só para isso.
- **Precisa de um Label sem campo associado** (ex.: título de seção, rótulo de card)? Não reaproveite este componente — ele foi desenhado especificamente para rotular campos de formulário. Documente um novo componente separado se esse caso aparecer com frequência.
