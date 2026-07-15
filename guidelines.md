\
# Guidelines — Kit de Componentes (Formulário de Login, Intranet)

A ideia do sistema inteiro em uma frase: **um design system precisa ser legível para o time E para a IA.**

Este arquivo resume as regras que valem para qualquer componente do kit. Para o detalhe de cada peça, ver os arquivos individuais: `label.md`, `field.md`, `checkbox.md`, `link.md`, `button.md`, `icons.md` — e `tokens.md` para a lista completa de variáveis.

## Vocabulário controlado (vale para todo o kit)

| Termo | Papel |
|---|---|
| `Container` | a caixa que envolve conteúdo (fill, stroke, radius, padding) — nunca "Box", "Wrapper" ou "Frame" |
| `Label` | o texto que rotula um campo ou ação |
| `Input` | o texto de valor/placeholder dentro de um campo |
| `HelperText` | mensagem de apoio ou erro abaixo de um campo |
| `Icon/Leading` / `Icon/Trailing` | posição do ícone dentro de um Container — não confundir com o nome do ícone-mestre (`Icon/User`, `Icon/Lock`...) |
| `State` | property que descreve o estado de interação (Default, Focus, Hover, Error...) |
| `Type` | property que descreve uma variação estrutural do componente (ex.: Primary/Secondary) |

## Regras gerais

**Fazer:**
- Toda cor, espaçamento, radius e borda vem de um token (`tokens.md`) — nunca valor fixo.
- Toda instância de ícone usa Instance Swap dentro de um slot nomeado por posição.
- Um conceito, um nome — em qualquer componente, `Container` é sempre `Container`, `Label` é sempre `Label`.

**Nunca fazer:**
- Nunca nomear pela aparência (cor, forma) — sempre pela função.
- Nunca duplicar um átomo (`Label`, `Icon`) como camada solta quando dá pra usar instância.

## O que fazer quando algo não existir

- **Property nova:** sempre como variante de `State` ou `Type`, reaproveitando tokens existentes antes de criar um novo.
- **Componente novo:** documentar seguindo o mesmo formato dos arquivos deste kit — Estrutura (JSON), Anatomia, e os 3 blocos (o que já existe / o que fazer e nunca fazer / o que fazer quando algo não existe).

## Pendências conhecidas do kit

Revisar antes de expandir o sistema para outros formulários da intranet:

- Typos em tokens: `text-primay` (→ "primary"), `radius-fiel-checkbox` (→ "field-checkbox").
- `radius-field` é reaproveitado pelo `Button` — considerar renomear para `radius-md`, já que não é mais exclusivo do Field.
- Em `Field / Password`, o ícone à direita está nomeado `Icon/Eye` em 4 dos 5 estados, e só `Icon/Trailing` no estado `Open` — precisa ficar consistente (`Icon/Trailing` nos 5 estados).
- A camada que agrupa Label+Content+HelperText dentro do `Field` ainda se chama `Field`, mesmo nome do componente raiz — considerar renomear para `Group` ou similar.
- `Button` tem padding fixo e assimétrico só no estado `Hover` — revisar consistência com o `Default`.

## Entrega oficial do projeto

Os dois componentes documentados como par obrigatório da entrega são **`Label` + `Field`** (ver `label.md` e `field.md`) — eles demonstram reaproveitamento real de componente (o Label é instanciado dentro do Field), não só composição visual. Os demais (`Checkbox`, `Link`, `Button`, `Icon/*`) documentam o restante do `LoginForm` como showcase do sistema completo.
