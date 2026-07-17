\
# Tokens

Lista de todas as variáveis (Local Variables) do Kit, organizadas por categoria. Qualquer componente deste sistema deve referenciar estes tokens — nunca um valor fixo.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `bg-field` | `#ffffff` | fundo dos campos (`Field`) |
| `border-default` | `#64748b` | borda padrão dos campos |
| `content-action` | `#1d4ed8` | cor de ação/interação — foco de campo, texto do `Link` (hover), fundo do `Button` (default) |
| `content-action-hover` | `#2563eb` | variação mais escura de `content-action`, usada no hover do `Button` |
| `content-error` | `#b91c1c` | qualquer estado de erro — borda, label, texto de ajuda |
| `text-primay` | `#111827` | texto padrão (label default, valor preenchido, texto do Link/Checkbox) — *grafia com typo, ver Pendências* |
| `text-value` | `#94a3b8` | placeholder/valor não preenchido dentro do campo |
| `icon` | `#475569` | cor de preenchimento dos ícones da biblioteca `Icon/*` |
| `white` | `#ffffff` | texto sobre fundo colorido (ex.: texto do `Button`) |

## Espaçamento e tamanho

| Token | Valor | Uso |
|---|---|---|
| `spacing-field-gap` | `8` | gap entre ícone e texto dentro do `Field`; reaproveitado no `Checkbox` |
| `spacing-field-padding-x` | `16` | padding horizontal do `Field` |
| `spacing-field-padding-y` | `8` | padding vertical do `Field` |
| `spacing-tap-padding` | `10` | padding interno do `Link` e do `Checkbox` (área de toque) |
| `radius-field` | `12` | corner radius do `Field`; reaproveitado no `Button` |
| `radius-fiel-checkbox` | `4` | corner radius do `Checkbox` — *grafia com typo, ver Pendências* |
| `border-width-default` | `1` | espessura de borda padrão dos campos |
| `button-height` | `44` | altura fixa do `Button`, valor vindo do Figma |

## Tipografia

| Token | Valor | Uso |
|---|---|---|
| `font-size-input` | `16` | tamanho do texto do `Input` dentro do `Field` |

## Efeito (Effect Style — não é Variable)

| Nome | Definição | Uso |
|---|---|---|
| `elevation/hover` | Drop shadow, cor `#11182740`, offset (0, 3), blur 6, spread 0 | sombra do `Button` no estado `Hover` |

> Sombra no Figma vive em Effect Styles, não em Variables — por isso aparece numa tabela separada. Ver `button.md` para o contexto de uso.

## Pendências identificadas

- `text-primay` está grafado assim em todo o arquivo (typo de "primary"). Corrigir o nome da variable e todas as referências numa única passada, para não quebrar nenhuma instância.
- `radius-fiel-checkbox` também tem typo ("fiel" → "field").
- `radius-field` é usado tanto no `Field` quanto no `Button` — o nome sugere exclusividade do Field. Se a intenção é reaproveitar entre famílias diferentes, vale renomear para algo mais neutro, como `radius-md`.

## Resolvido

- `Link` e `Checkbox` agora usam o token `spacing-tap-padding` (`10px`) em vez de padding fixo.
- O `Input` do `Field` agora usa o token `font-size-input` (`16px`) em vez de depender de um "token de tipografia do sistema" que não existia.
- A caixinha (`Container`) do `Checkbox` — antes uma imagem no Figma, sem tokens associados — passou a ser desenhada em CSS reaproveitando tokens que já existiam: `bg-field` e `border-default` (vazio), `content-action` (marcado), `white` (marca de check) e `radius-fiel-checkbox`. Nenhuma cor nova foi criada.
- `Button` estava com altura variável (dependente do padding vertical). Agora usa o token `button-height` (`44px`), fixo, batendo com o componente no Figma.
