---
name: Foundation
colors:
  surface: '#0B1020'
  surface-dim: '#0B1020'
  surface-bright: '#27314D' # Vintage Navy
  surface-container-lowest: '#0B1020'
  surface-container-low: '#141A2E'
  surface-container: '#141A2E' # Mirage
  surface-container-high: '#1C243D' # Cosmos
  surface-container-highest: '#27314D'
  on-surface: '#F4F7FF' # Blue White
  on-surface-variant: '#94A3B8' # Oslo
  inverse-surface: '#F4F7FF'
  inverse-on-surface: '#0B1020'
  outline: '#7B8CA3' # Fashion Denim
  outline-variant: '#27314D'
  surface-tint: '#6C5CE7'
  primary: '#6C5CE7' # Lady Blue
  on-primary: '#F4F7FF'
  primary-container: '#5848D6' # Majorele BLue
  on-primary-container: '#F4F7FF'
  inverse-primary: '#7B6FF0' # Medium Slate Blue
  secondary: '#22D3EE' # Average Cyan
  on-secondary: '#0B1020'
  secondary-container: '#1C243D'
  on-secondary-container: '#22D3EE'
  tertiary: '#A3E635' # Nour
  on-tertiary: '#0B1020'
  error: '#EF4444' # Blaze Red
  on-error: '#F4F7FF'
  error-text: '#815858' # Dark Mocha
  success: '#22C55E' # Crispy Mint Green
  on-success: '#0B1020'
  warning: '#F59E0B' # Strong Amber
  on-warning: '#0B1020'
  info: '#22D3EE'
  on-info: '#0B1020'
  background: '#0B1020' # Ebony Black
  on-background: '#F4F7FF'
  surface-variant: '#1C243D'
typography:
  display-xl:
    fontFamily: Space Grotesk # font-display
    fontSize: 60px # text-6xl
    fontWeight: '600' # font-semibold
    lineHeight: 60px # leading-none
    letterSpacing: -0.05em # tracking-tighter
  display-xl-mobile:
    fontFamily: Space Grotesk # font-display
    fontSize: 48px # text-5xl
    fontWeight: '600' # font-semibold
    lineHeight: 48px # leading-none
    letterSpacing: -0.025em # tracking-tight
  display-lg:
    fontFamily: Space Grotesk # font-display
    fontSize: 48px # text-5xl
    fontWeight: '600' # font-semibold
    lineHeight: 48px # leading-none
    letterSpacing: -0.025em # tracking-tight
  display-lg-mobile:
    fontFamily: Space Grotesk # font-display
    fontSize: 36px # text-4xl
    fontWeight: '600' # font-semibold
    lineHeight: 40px # leading-10
    letterSpacing: -0.025em # tracking-tight
  headline-lg:
    fontFamily: Space Grotesk # font-display
    fontSize: 36px # text-4xl
    fontWeight: '600' # font-semibold
    lineHeight: 40px # leading-10
    letterSpacing: -0.025em # tracking-tight
  headline-md:
    fontFamily: Space Grotesk # font-display
    fontSize: 24px # text-2xl
    fontWeight: '600' # font-semibold
    lineHeight: 32px # leading-8
    letterSpacing: -0.025em # tracking-tight
  headline-sm:
    fontFamily: Space Grotesk # font-display
    fontSize: 20px # text-xl
    fontWeight: '600' # font-semibold
    lineHeight: 28px # leading-7
    letterSpacing: 0 # tracking-normal
  body-lg:
    fontFamily: Inter # font-sans
    fontSize: 18px # text-lg
    fontWeight: '400' # font-normal
    lineHeight: 28px # leading-7
    letterSpacing: 0 # tracking-normal
  body-md:
    fontFamily: Inter # font-sans
    fontSize: 16px # text-base
    fontWeight: '400' # font-normal
    lineHeight: 26px # leading-relaxed
  body-sm:
    fontFamily: Inter # font-sans
    fontSize: 14px # text-sm
    fontWeight: '400' # font-normal
    lineHeight: 20px # leading-5
  label-md:
    fontFamily: Inter # font-sans
    fontSize: 14px # text-sm
    fontWeight: '500' # font-medium
    lineHeight: 20px # leading-5
    letterSpacing: 0 # tracking-normal
  label-sm:
    fontFamily: Inter # font-sans
    fontSize: 12px # text-xs
    fontWeight: '600' # font-semibold
    lineHeight: 16px # leading-4
    letterSpacing: 0.025em # tracking-wide
  code-md:
    fontFamily: JetBrains Mono # font-mono
    fontSize: 14px # text-sm
    fontWeight: '400' # font-normal
    lineHeight: 20px # leading-5
  code-sm:
    fontFamily: JetBrains Mono # font-mono
    fontSize: 12px # text-xs
    fontWeight: '500' # font-medium
    lineHeight: 16px # leading-4
rounded:
  xs: 0.125rem # rounded-xs
  sm: 0.25rem # rounded-sm
  md: 0.375rem # rounded-md
  lg: 0.5rem # rounded-lg
  xl: 0.75rem # rounded-xl
  2xl: 1rem # rounded-2xl
  3xl: 1.5rem # rounded-3xl
  4xl: 2rem # rounded-4xl
  full: 9999px # rounded-full
spacing:
  gutter: 1.5rem # spacing-6
  gutter-sm: 1rem # spacing-4
  gutter-lg: 2rem # spacing-8
  margin: 2rem # spacing-8
  margin-sm: 1rem # spacing-4
  margin-lg: 3rem # spacing-12
  space-xs: 0.25rem # spacing-1
  space-sm: 0.5rem # spacing-2
  space-md: 1rem # spacing-4
  space-lg: 1.5rem # spacing-6
  space-xl: 2.5rem # spacing-10
---

## Marca e estilo

O design system Foundation comunica tecnologia, precisão e sofisticação digital. Foi construído para produtos digitais, websites e interfaces da marca, e deve transmitir controle, inteligência e confiança imediata sem depender de excesso visual.

O estilo visual é um **Dark UI com bordas estruturais de 1px** e glow controlado. As interfaces são construídas com superfícies escuras em camadas, muito espaço negativo, contrastes fortes e poucos elementos de destaque. Efeitos luminosos e gradientes são recursos de apoio, nunca protagonistas. O princípio é **menos elementos, mais impacto**: a marca deve parecer tecnológica por meio de precisão, tipografia, contraste, geometria, consistência e movimento controlado, e não pela adição de efeitos.

## Cores

A paleta se apoia em uma escala de valores calibrada para contraste sobre uma base azul-marinho profunda:

- **Base e superfícies:**
  - Fundo principal: `#0B1020` (fundação, canvas)
  - Superfície nível 1: `#141A2E` (cards, containers, toolbars)
  - Superfície nível 2 (elevada): `#1C243D` (modais, popovers, itens ativos)
  - Borda sutil: `#27314D` (definição estrutural de `1px`)

- **Marca e acentos cromáticos:**
  - Brand: `#6C5CE7` (logo, CTAs, elementos principais)
  - Brand hover: `#7B6FF0`
  - Brand ativo/profundo: `#5848D6`
  - Accent / foco: `#22D3EE` (ciano elétrico para links, conectividade, precisão, destaques pontuais e foco)
  - Terciária: `#A3E635` (lima energético para ação, crescimento e resultado)
  - Gradiente de assinatura: `linear-gradient(135deg, #6C5CE7 0%, #22D3EE 100%)`, permitido apenas em aplicações digitais de destaque

- **Tipografia e conteúdo:**
  - Texto primário: `#F4F7FF` (branco levemente frio, alto contraste)
  - Texto secundário: `#94A3B8` (cinza-azulado para textos auxiliares)
  - Texto terciário: `#7B8CA3` (labels de baixa ênfase, placeholders, dicas inativas; ~5:1 sobre o fundo, dentro do AA)

- **Estados funcionais:**
  - Sucesso: `#22C55E`
  - Aviso: `#F59E0B`
  - Erro: `#EF4444` (ícones, bordas e chips); para texto de erro corrido, usar `#F87171` (~5.9:1 sobre o fundo)
  - Informação: `#22D3EE`

Distribuição recomendada: cerca de 60% fundo e superfícies escuras, 20% superfícies elevadas, 10% brand e 10% divididos entre accent, cor terciária, tipografia e elementos claros. A cor lima deve ocupar apenas 5% a 10% dos elementos visuais, reservada a indicadores de sucesso, pequenos highlights, badges, métricas positivas, estados ativos, detalhes em gráficos, pontos de interação e microdetalhes decorativos. Ela adiciona energia à identidade sem transformar a paleta em uma composição neon genérica. As cores funcionais não substituem a identidade principal e nunca devem ser o único recurso para comunicar um estado.

## Tipografia

A hierarquia tipográfica combina três papéis coordenados:

- **Títulos e display:** `Space Grotesk` traz precisão geométrica com leve calor, sem parecer excêntrica. Usada em H1 a H4, headlines, números de destaque e elementos de display, com peso 600 e tracking que vai de bem apertado (`-0.05em`) nos displays até neutro nos headlines menores, mantendo títulos grandes densos e arquitetônicos.
- **Corpo e controles:** `Inter` cobre parágrafos, navegação, botões, formulários, cards e labels, com leitura neutra e limpa. Corpo padrão em `16px`com entrelinha relaxada (1.625).
- **Dados e código:** `JetBrains Mono` para blocos de código, métricas, parâmetros e labels técnicos. Usar figuras tabulares para evitar deslocamento de layout em números que variam.

Não misturar outras famílias tipográficas além dessas três.

## Layout e espaçamento

O layout usa um grid fluido responsivo de 12 colunas sobre uma baseline modular de 8px:

- **Desktop (1200px+):** 12 colunas, gutters de 32px (`gutter-lg`), margens de canvas de 48px (`margin-lg`), container limitado a 1280px.
- **Tablet (768px a 1199px):** 8 colunas, gutters de 24px (`gutter`), margens de canvas de 32px (`margin`).
- **Mobile (<768px):** 4 colunas, gutters de 16px (`gutter-sm`), margens de canvas de 16px (`margin-sm`). Colunas viram fluxo vertical; controles horizontais e toolbars são empilhados em largura total. Áreas de toque com no mínimo 44px.

Interiores de componentes seguem múltiplos de 4px/8px: `space-xs` (4px), `space-sm` (8px), `space-md` (16px), `space-lg` (24px) e `space-xl` (40px). Entre seções de página, prefira espaços generosos (64px a 128px em desktop). Princípios: alinhamento rigoroso, bastante espaço negativo, blocos de conteúdo bem definidos e uso de linhas e bordas discretas para estruturar a interface, evitando elementos decorativos em excesso.

## Elevação e profundidade

A profundidade é comunicada por camadas de superfície e luminescência controlada, não por sombras pesadas e opacas.

- **Camadas base:** canvas em `#0B1020`. Componentes padrão em `#141A2E`. Overlays e flyouts em `#1C243D`.
- **Bordas como estrutura:** toda superfície é delimitada por uma linha fina `1px solid #27314D`. Em hover de elementos interativos, a borda transiciona para `#6C5CE7` ou `#22D3EE` a cerca de 50% de opacidade.
- **Sistema de sombras ambiente:**
  - Baixa (cards, inputs): `0 2px 8px -2px rgba(3, 7, 18, 0.6), 0 0 0 1px #27314D`
  - Média (dropdowns, barras flutuantes): `0 8px 24px -4px rgba(3, 7, 18, 0.7), 0 0 0 1px #27314D`
  - Alta (diálogos, drawers): `0 20px 40px -8px rgba(3, 7, 18, 0.85), 0 0 0 1px #27314D`
- **Glow:** funciona como atmosfera, nunca como borda luminosa permanente. Glow da marca: `0 0 80px rgba(108, 92, 231, 0.12)`. Glow de destaque: `0 0 60px rgba(34, 211, 238, 0.10)`. Em elementos focais menores, usar `0 0 24px -4px rgba(108, 92, 231, 0.25)` ou `0 0 20px -4px rgba(34, 211, 238, 0.2)`. O glow nunca deve reduzir o contraste do texto.

## Formas

A linguagem geométrica equilibra ângulos mecânicos limpos com curvas ergonômicas:

- **Inputs, chips e botões:** 8px (cantos suavemente arredondados)
- **Cards, células de tabela e painéis:** 12px a 16px (cantos visivelmente arredondados)
- **Diálogos e containers principais:** 24px (cantos generosamente arredondados)
- **Badges circulares e avatares:** 9999px (formato pill / totalmente circulares)

Evitar cards excessivamente arredondados ou com aparência infantil. Ícones seguem a mesma lógica: geométricos, simples, outline, com stroke uniforme (1.5px para detalhes, 2px padrão, 2.5px para destaque).

## Componentes

- **Botões:**
  - *Primário:* fundo `#6C5CE7`, texto `#F4F7FF`, radius 8px, padding 12px 20px, `Inter` 600. Hover muda para `#7B6FF0`, sobe 1px (`translateY(-1px)`) e ganha glow sutil `0 0 16px rgba(108, 92, 231, 0.35)`. Transição de 180ms.
  - *Secundário / outline:* fundo transparente, borda `1px solid #27314D`, texto `#F4F7FF`. Hover leva a borda para `#6C5CE7` e adiciona tint `rgba(108, 92, 231, 0.08)`.
  - *Gradiente:* `linear-gradient(135deg, #6C5CE7 0%, #22D3EE 100%)`, texto `#F4F7FF`, restrito a conversões principais da marca.
  - *Link:* texto `#22D3EE`, sem sublinhado por padrão.

- **Inputs e campos:**
  - Fundo `#0B1020`, borda `1px solid #27314D`, texto `#F4F7FF`, placeholder `#7B8CA3`, altura mínima 48px, padding horizontal 16px, radius 8px.
  - Foco move a borda para `#6C5CE7` com anel externo `0 0 0 3px rgba(108, 92, 231, 0.14)`. Em contextos de telemetria ou dados, o foco pode usar `#22D3EE` com `0 0 0 1px #22D3EE, 0 0 12px -2px rgba(34, 211, 238, 0.3)`.

- **Cards e módulos de dados:**
  - Fundo `#141A2E`, borda `1px solid #27314D`, radius 12px a 16px, padding interno 24px.
  - Cards interativos, em hover, elevam a superfície para `#1C243D`, mudam a borda para `rgba(108, 92, 231, 0.55)` e recebem glow `0 0 50px rgba(108, 92, 231, 0.08)`. Nem todo card deve brilhar.

- **Chips e tags de status:**
  - Altura de 24px a 28px, radius 6px a 8px, tipografia `label-sm`.
  - Preenchimento cromático de baixa opacidade (ex.: `rgba(34, 211, 238, 0.1)`) com label saturado `#22D3EE` e borda 1px `rgba(34, 211, 238, 0.3)`.

- **Controles de seleção (checkbox e radio):**
  - Tamanho 18px x 18px, borda `1px solid #27314D`, fundo `#0B1020`.
  - Estado marcado preenche com `#6C5CE7` e exibe tick ou ponto geométrico em `#F4F7FF`.

- **Listas e tabelas:**
  - Sem linhas zebradas; a separação usa divisores horizontais `1px solid #27314D`.
  - Cabeçalhos em `label-sm`, cor `#94A3B8`, caixa alta com tracking. Linhas em hover recebem tint `rgba(255, 255, 255, 0.02)`.

- **Navegação:**
  - Logo sempre à esquerda; links com baixo contraste inicial (`#94A3B8`) e estado ativo em `#6C5CE7` ou `#22D3EE`; CTA principal separado visualmente à direita. Em mobile, menu compacto.

- **Foco e acessibilidade:**
  - Todo elemento interativo tem foco visível: `outline: 2px solid #22D3EE; outline-offset: 3px`. Estados nunca dependem apenas de cor.

- **Movimento:**
  - Animações rápidas e discretas: 120ms (rápida), 180ms (padrão), 320ms (lenta), com easing `cubic-bezier(0.22, 1, 0.36, 1)`. Entradas com fade + translate curto; gradientes podem ter movimento extremamente lento. Evitar animações constantes que distraiam do conteúdo.
  - Respeitar `prefers-reduced-motion`: com a preferência ativa, desativar translações e glows animados, mantendo apenas transições de opacidade curtas.
