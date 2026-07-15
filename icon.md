\
# Icons

Biblioteca de ícones simples, usados como instância dentro dos slots `Icon/Leading` e `Icon/Trailing` de outros componentes (principalmente o `Field`).

## Estrutura

```json
{
  "family": "Icon",
  "members": ["Icon/User", "Icon/Lock", "Icon/Eye", "Icon/EyeSlash"],
  "tokens": { "fill": "icon" },
  "size": "16x16"
}
```

## 1. O que já existe

- `Icon/User` — usado no `Icon/Leading` do `Field / Login`
- `Icon/Lock` — usado no `Icon/Leading` do `Field / Password`
- `Icon/Eye` — usado no `Icon/Trailing` do `Field / Password`, nos estados com a senha oculta
- `Icon/EyeSlash` — usado no `Icon/Trailing` do `Field / Password`, no estado `Open` (senha visível)

Nenhum ícone tem property própria — a variação acontece no componente que os usa, via Instance Swap.

## 2. O que fazer / o que nunca fazer

**Fazer:**
- Nomear qualquer novo ícone como `Icon/[Identidade]` — o que ele representa, não onde é usado.
- Usar sempre como instância dentro de um slot já nomeado por posição (`Icon/Leading`/`Icon/Trailing`) — o nome do slot descreve o papel; o nome do ícone-mestre descreve o conteúdo.

**Nunca fazer:**
- Não nomear um ícone pela posição onde ele vai ser usado (ex.: não crie um ícone-mestre chamado `Icon/Leading` — isso já aconteceu uma vez neste projeto e foi corrigido).
- Não colar uma imagem solta no lugar de uma instância — isso quebra a possibilidade de Instance Swap.

## 3. O que fazer quando algo não existe

- **Precisa de um ícone novo** (ex.: e-mail, calendário)? Crie como `Icon/[Nome]`, 16x16, seguindo o padrão visual dos existentes, e adicione como opção no Instance Swap do slot correspondente.

## Nota sobre o Checkbox

O ícone de check do `Checkbox` não faz parte desta família — a marca de check já vem embutida na própria arte do `Container` (uma imagem para vazio, outra para marcado), em vez de ser uma instância separada de `Icon/Check`. É uma decisão válida (comum em bibliotecas que preferem a marca "colada" no contêiner para garantir alinhamento pixel-perfect), só não é intercambiável com o Instance Swap do jeito que os ícones do `Field` são. Ver `checkbox.md`.
