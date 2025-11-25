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

## 📧 Como Alterar Informações de Contato (Email, Telefone, Endereço)

As informações de contato aparecem em **dois lugares** na landing page:
1. **Seção de Contato** (meio da página)
2. **Rodapé (Footer)** (final da página)

### Arquivo: `src/pages/Index.tsx`

#### 📍 Seção de Contato Principal (Linhas 360-386)

Localize e edite as seguintes linhas:

```tsx
// TELEFONES (Linhas 361-366)
<div className="flex items-start gap-4">
  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
  <div>
    <h3 className="font-semibold text-lg mb-1">Telefone</h3>
    <p className="text-muted-foreground">(11) 98765-4321</p>  {/* ⬅️ Altere aqui */}
    <p className="text-muted-foreground">(11) 3456-7890</p>   {/* ⬅️ Altere aqui */}
  </div>
</div>

// E-MAILS (Linhas 369-376)
<div className="flex items-start gap-4">
  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
  <div>
    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
    <p className="text-muted-foreground">contato@balancaspro.com.br</p>  {/* ⬅️ Altere aqui */}
    <p className="text-muted-foreground">vendas@balancaspro.com.br</p>   {/* ⬅️ Altere aqui */}
  </div>
</div>

// ENDEREÇO (Linhas 378-385)
<div className="flex items-start gap-4">
  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
  <div>
    <h3 className="font-semibold text-lg mb-1">Endereço</h3>
    <p className="text-muted-foreground">Rua Industrial, 1234</p>           {/* ⬅️ Altere aqui */}
    <p className="text-muted-foreground">São Paulo - SP, 01234-567</p>    {/* ⬅️ Altere aqui */}
  </div>
</div>
```

#### 📍 Rodapé (Footer) - (Linhas 475-482)

```tsx
<div>
  <h3 className="font-semibold text-lg mb-4">Contato</h3>
  <ul className="space-y-2 text-background/80">
    <li>(11) 98765-4321</li>                    {/* ⬅️ Altere aqui */}
    <li>contato@balancaspro.com.br</li>         {/* ⬅️ Altere aqui */}
    <li>Seg - Sex: 8h às 18h</li>               {/* ⬅️ Altere aqui */}
    <li>Sáb: 8h às 12h</li>                     {/* ⬅️ Altere aqui */}
  </ul>
</div>
```

#### 📍 Nome da Empresa (Linha 59 e 448)

```tsx
// Cabeçalho (Header) - Linha 59
<span className="text-2xl font-bold text-foreground">BalançasPro</span>  {/* ⬅️ Altere aqui */}

// Rodapé (Footer) - Linha 448
<span className="text-2xl font-bold">BalançasPro</span>  {/* ⬅️ Altere aqui */}
```

---

## 📬 Configurar Envio Real de E-mails (Formulário de Contato)

Atualmente, o formulário apenas mostra uma mensagem de confirmação, mas **não envia e-mails reais**. Para ativar o envio, siga estes passos:

### Passo 1: Criar Conta no Resend

1. Acesse: [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. **IMPORTANTE**: Valide seu domínio aqui: [https://resend.com/domains](https://resend.com/domains)

### Passo 2: Obter API Key

1. Acesse: [https://resend.com/api-keys](https://resend.com/api-keys)
2. Clique em "Create API Key"
3. Copie a chave gerada (exemplo: `re_123456789...`)

### Passo 3: Adicionar a Chave no Lovable

1. No Lovable, vá em **Cloud** → **Secrets**
2. Adicione um novo secret chamado: `RESEND_API_KEY`
3. Cole a chave que você copiou do Resend

### Passo 4: Criar Edge Function

Crie o arquivo `supabase/functions/send-contact-email/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormData = await req.json();

    // Email para o cliente (confirmação)
    await resend.emails.send({
      from: "BalançasPro <onboarding@resend.dev>", // Altere após validar domínio
      to: [email],
      subject: "Recebemos sua mensagem - BalançasPro",
      html: `
        <h2>Olá ${name}!</h2>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p><strong>Sua mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Atenciosamente,<br><strong>Equipe BalançasPro</strong></p>
      `,
    });

    // Email para você (notificação de novo lead)
    await resend.emails.send({
      from: "BalançasPro <onboarding@resend.dev>",
      to: ["seu-email@dominio.com.br"], // ⬅️ COLOQUE SEU EMAIL AQUI
      subject: `Novo Contato: ${name}`,
      html: `
        <h2>Novo contato recebido!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
```

### Passo 5: Conectar Formulário à Edge Function

Edite `src/pages/Index.tsx`, localize a função `handleSubmit` (linha ~37) e substitua por:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      throw new Error("Erro ao enviar");
    }
  } catch (error) {
    toast({
      title: "Erro ao enviar",
      description: "Tente novamente mais tarde.",
      variant: "destructive",
    });
  }
};
```

---

## 📝 Checklist de Alterações de Contato

Use esta lista para garantir que alterou todos os lugares:

- [ ] **Telefone na seção de contato** (Linhas 364-365)
- [ ] **Email na seção de contato** (Linhas 373-374)
- [ ] **Endereço na seção de contato** (Linhas 382-383)
- [ ] **Telefone no rodapé** (Linha 478)
- [ ] **Email no rodapé** (Linha 479)
- [ ] **Horário de atendimento no rodapé** (Linhas 480-481)
- [ ] **Nome da empresa no cabeçalho** (Linha 59)
- [ ] **Nome da empresa no rodapé** (Linha 448)
- [ ] **Email de destino na edge function** (se configurar envio real)

---

## ⚠️ Observações Importantes

### Sobre Emails com Resend:
- **Plano Gratuito**: 100 emails/dia, 3.000 emails/mês
- **Domínio**: Use `onboarding@resend.dev` para testes, mas valide seu domínio para produção
- **Spam**: Sempre valide seu domínio para evitar emails caírem na caixa de spam

### Sobre o Formulário:
- **Validação**: Os campos são obrigatórios (atributo `required`)
- **Telefone**: Use formato `(XX) XXXXX-XXXX` para melhor experiência
- **Email**: Validação automática de formato de email

---

**Desenvolvido para o projeto BalançasPro** 🎯
