# Guia de Personalização de Fontes - Landing Page BalançasPro

Este guia explica como alterar as fontes dos títulos e textos da landing page de forma consistente e profissional.

## 📋 Índice
- [Estrutura Atual](#estrutura-atual)
- [Como Adicionar Fontes Personalizadas](#como-adicionar-fontes-personalizadas)
- [Onde Estão os Textos na Landing Page](#onde-estão-os-textos-na-landing-page)
- [Sistema de Design com Tailwind](#sistema-de-design-com-tailwind)
- [Exemplos Práticos](#exemplos-práticos)

---

## 🎨 Estrutura Atual

Atualmente, a landing page utiliza as fontes padrão do sistema. Para personalizar, você precisa:

1. Adicionar a fonte no `index.html`
2. Configurar no `tailwind.config.ts`
3. Aplicar nas classes Tailwind do `src/index.css`

---

## 🔤 Como Adicionar Fontes Personalizadas

### Passo 1: Adicionar Google Fonts no HTML

Edite o arquivo `index.html` e adicione a fonte dentro da tag `<head>`:

```html
<head>
  <!-- Outras meta tags... -->
  
  <!-- Adicione suas fontes aqui -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
</head>
```

**Exemplo de fontes populares:**
- **Títulos**: Montserrat, Poppins, Raleway, Playfair Display
- **Textos**: Open Sans, Roboto, Lato, Inter

### Passo 2: Configurar no Tailwind

Edite o arquivo `tailwind.config.ts` na seção `extend`:

```typescript
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ADICIONE ESTA SEÇÃO
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],  // Para títulos
        'body': ['Open Sans', 'sans-serif'],      // Para textos
      },
      // ... resto da configuração
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Passo 3: Aplicar no Sistema de Design

Edite o arquivo `src/index.css` para definir as fontes globalmente:

```css
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-body; /* Adicione font-body aqui */
  }
  
  /* Adicione estilos para títulos */
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading; /* Todos os títulos usarão a fonte de heading */
  }
}
```

---

## 📍 Onde Estão os Textos na Landing Page

### Arquivo Principal: `src/pages/Index.tsx`

#### Títulos Principais (H1, H2, H3):
```tsx
// Linha 59 - Nome da empresa
<span className="text-2xl font-bold">BalançasPro</span>

// Linhas ~104-110 - Hero Section (Título Principal)
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
  Soluções Completas em Balanças
</h1>
<p className="text-xl md:text-2xl mb-8">
  Manutenção, Calibração e Peças com Preços Competitivos
</p>

// Linhas ~120 - Títulos de Seções
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
  Nossos Serviços
</h2>
```

#### Textos do Corpo:
```tsx
// Linhas ~140-180 - Cards de Serviços
<CardTitle className="text-xl font-semibold">Manutenção</CardTitle>
<CardDescription>Serviços especializados...</CardDescription>

// Linhas ~240-280 - Seção de Preços
<p className="text-muted-foreground">A partir de</p>
<p className="text-4xl font-bold">R$ 250</p>
```

#### Botões e Links:
```tsx
// Linha 75 - Botão CTA
<Button onClick={() => scrollToSection("contato")}>
  Solicitar Orçamento
</Button>
```

---

## 🎯 Sistema de Design com Tailwind

### Classes de Fonte Disponíveis:

Após configurar as fontes, você pode usar estas classes:

```tsx
// Para títulos
<h1 className="font-heading text-5xl font-bold">
  Seu Título
</h1>

// Para textos normais
<p className="font-body text-lg">
  Seu texto aqui
</p>

// Pesos de fonte
font-light    // 300
font-normal   // 400
font-medium   // 500
font-semibold // 600
font-bold     // 700
font-extrabold // 800

// Tamanhos de fonte
text-xs   // 12px
text-sm   // 14px
text-base // 16px
text-lg   // 18px
text-xl   // 20px
text-2xl  // 24px
text-3xl  // 30px
text-4xl  // 36px
text-5xl  // 48px
text-6xl  // 60px
text-7xl  // 72px
```

---

## 💡 Exemplos Práticos

### Exemplo 1: Fontes Modernas e Elegantes

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Tailwind Config:**
```typescript
fontFamily: {
  'heading': ['Playfair Display', 'serif'],
  'body': ['Inter', 'sans-serif'],
}
```

### Exemplo 2: Fontes Profissionais e Corporativas

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
```

**Tailwind Config:**
```typescript
fontFamily: {
  'heading': ['Raleway', 'sans-serif'],
  'body': ['Roboto', 'sans-serif'],
}
```

### Exemplo 3: Fontes Ousadas e Impactantes

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
```

**Tailwind Config:**
```typescript
fontFamily: {
  'heading': ['Bebas Neue', 'sans-serif'],
  'body': ['Montserrat', 'sans-serif'],
}
```

---

## 🔧 Localização dos Arquivos para Editar

| Arquivo | Caminho | O que editar |
|---------|---------|--------------|
| **HTML** | `index.html` | Adicionar links do Google Fonts na tag `<head>` |
| **Tailwind Config** | `tailwind.config.ts` | Configurar `fontFamily` na seção `extend` |
| **CSS Global** | `src/index.css` | Aplicar fontes globalmente com `@apply` |
| **Componente Principal** | `src/pages/Index.tsx` | Usar classes `font-heading` e `font-body` nos elementos |

---

## 📚 Recursos Úteis

- [Google Fonts](https://fonts.google.com/) - Catálogo de fontes gratuitas
- [Font Pair](https://www.fontpair.co/) - Sugestões de combinações de fontes
- [Tailwind Typography](https://tailwindcss.com/docs/font-family) - Documentação oficial
- [Type Scale](https://type-scale.com/) - Ferramenta para criar escalas tipográficas

---

## ⚠️ Dicas Importantes

1. **Performance**: Não carregue mais de 2-3 famílias de fontes
2. **Pesos**: Escolha apenas os pesos que realmente vai usar
3. **Fallbacks**: Sempre forneça fontes de fallback (sans-serif, serif)
4. **Contraste**: Teste a legibilidade em modo claro e escuro
5. **Responsividade**: Use tamanhos responsivos (`text-2xl md:text-4xl lg:text-5xl`)

---

## 🎨 Sugestão de Combinações para Landing Page de Balanças

### Opção 1 - Profissional e Confiável
- **Títulos**: Raleway (bold, moderno, limpo)
- **Textos**: Open Sans (legível, profissional)

### Opção 2 - Impacto e Autoridade
- **Títulos**: Bebas Neue (impactante, industrial)
- **Textos**: Roboto (neutro, confiável)

### Opção 3 - Elegância Técnica
- **Títulos**: Montserrat (geométrica, versátil)
- **Textos**: Lato (amigável, técnico)

---

**Desenvolvido para o projeto BalançasPro** 🎯
