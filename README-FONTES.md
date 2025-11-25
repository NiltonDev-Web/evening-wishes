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

---

## 🖼️ Como Alterar as Imagens da Landing Page

Se você quiser reutilizar esta landing page para outro tipo de serviço (ex: manutenção de empilhadeiras, equipamentos médicos, etc.), precisará substituir as imagens.

### 📂 Localização das Imagens Atuais

Todas as imagens estão na pasta: **`src/assets/`**

```
src/assets/
├── hero-truck-scale.jpg          ⬅️ Imagem principal (Hero)
├── calibration-service.jpg       ⬅️ Serviço de calibração
├── scale-parts.jpg               ⬅️ Peças de balanças
├── scales-variety.jpg            ⬅️ Variedade de balanças
├── gallery-maintenance.jpg       ⬅️ Galeria: Manutenção
├── gallery-weights.jpg           ⬅️ Galeria: Pesos
├── gallery-warehouse.jpg         ⬅️ Galeria: Galpão
├── gallery-display.jpg           ⬅️ Galeria: Display
└── gallery-platform.jpg          ⬅️ Galeria: Plataforma
```

---

### 🔄 Como Substituir Imagens - 3 Métodos

#### **Método 1: Substituir Arquivos Diretamente (Mais Fácil)**

1. Prepare suas novas imagens com os **mesmos nomes** dos arquivos atuais
2. Substitua os arquivos na pasta `src/assets/`
3. Pronto! A landing page usará automaticamente suas novas imagens

**Vantagem**: Não precisa editar código  
**Desvantagem**: Precisa usar os mesmos nomes de arquivo

---

#### **Método 2: Adicionar Novas Imagens e Atualizar Imports**

Se você quiser usar **nomes diferentes** para suas imagens:

##### Passo 1: Adicione suas imagens na pasta `src/assets/`

Exemplo:
```
src/assets/
├── empilhadeira-principal.jpg
├── manutencao-empilhadeira.jpg
├── pecas-empilhadeira.jpg
└── ...
```

##### Passo 2: Atualize os imports no arquivo `src/pages/Index.tsx`

Localize as linhas 10-18 e altere:

```tsx
// ANTES (Balanças)
import heroImage from "@/assets/hero-truck-scale.jpg";
import partsImage from "@/assets/scale-parts.jpg";
import calibrationImage from "@/assets/calibration-service.jpg";
import scalesImage from "@/assets/scales-variety.jpg";
import galleryMaintenance from "@/assets/gallery-maintenance.jpg";
import galleryWeights from "@/assets/gallery-weights.jpg";
import galleryWarehouse from "@/assets/gallery-warehouse.jpg";
import galleryDisplay from "@/assets/gallery-display.jpg";
import galleryPlatform from "@/assets/gallery-platform.jpg";

// DEPOIS (Empilhadeiras - exemplo)
import heroImage from "@/assets/empilhadeira-principal.jpg";
import partsImage from "@/assets/pecas-empilhadeira.jpg";
import calibrationImage from "@/assets/manutencao-empilhadeira.jpg";
import scalesImage from "@/assets/empilhadeiras-variedade.jpg";
import galleryMaintenance from "@/assets/galeria-oficina.jpg";
import galleryWeights from "@/assets/galeria-armazem.jpg";
import galleryWarehouse from "@/assets/galeria-servico.jpg";
import galleryDisplay from "@/assets/galeria-painel.jpg";
import galleryPlatform from "@/assets/galeria-equipamento.jpg";
```

##### Passo 3: Atualize os textos alternativos (ALT) e títulos

Localize as linhas 25-35 e atualize os textos:

```tsx
const galleryImages = [
  { src: heroImage, alt: "Empilhadeira em operação", title: "Empilhadeiras Industriais" },
  { src: scalesImage, alt: "Diversos modelos de empilhadeiras", title: "Modelos Disponíveis" },
  { src: galleryMaintenance, alt: "Manutenção de empilhadeira", title: "Serviço de Manutenção" },
  // ... continue para todas as imagens
];
```

---

#### **Método 3: Gerar Imagens com IA (Lovable AI)**

Se você não tem imagens próprias, pode gerar usando IA:

##### Exemplo de Edge Function para Gerar Imagem:

Crie `supabase/functions/generate-image/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        modalities: ["image", "text"]
      })
    });

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    return new Response(
      JSON.stringify({ imageUrl }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );
  } catch (error: any) {
    console.error("Erro ao gerar imagem:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
```

##### Prompts de Exemplo para Gerar Imagens:

```javascript
// Hero - Imagem principal
"Professional industrial forklift in modern warehouse, wide angle shot, bright lighting, high quality photography"

// Manutenção
"Technician performing maintenance on industrial forklift, professional service, workshop environment"

// Peças
"Industrial forklift spare parts arranged on table, professional product photography, studio lighting"

// Galeria - Variedade
"Multiple types of industrial forklifts, showroom display, professional photography"
```

---

### 📐 Especificações Técnicas das Imagens

Para melhor desempenho e qualidade visual:

| Tipo de Imagem | Tamanho Recomendado | Proporção | Formato |
|----------------|---------------------|-----------|---------|
| **Hero (Principal)** | 1920 x 1080 px | 16:9 | JPG/WebP |
| **Galeria** | 1200 x 800 px | 3:2 | JPG/WebP |
| **Cards de Serviço** | 800 x 600 px | 4:3 | JPG/WebP |
| **Seção de Contato** | 800 x 600 px | 4:3 | JPG/WebP |

**Dicas de Otimização:**
- Mantenha imagens abaixo de **500 KB** cada
- Use compressão: [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
- Formato WebP oferece melhor qualidade com menor tamanho
- Para imagens com transparência, use PNG

---

### 🎨 Onde as Imagens São Usadas

#### **1. Hero Section (Tela Principal) - Linha 106**
```tsx
<img src={heroImage} alt="Caminhão em balança rodoviária" className="w-full h-full object-cover" />
```
**O que alterar**: 
- `alt=""` - Descrição da imagem (importante para SEO)

#### **2. Galeria de Imagens - Linhas 25-35**
```tsx
const galleryImages = [
  { 
    src: heroImage, 
    alt: "Balança rodoviária com caminhão",     // ⬅️ Altere a descrição
    title: "Balanças Rodoviárias"               // ⬅️ Altere o título
  },
  // ... mais imagens
];
```

#### **3. Seção de Contato - Linha 357**
```tsx
<img src={calibrationImage} alt="Serviço de calibração" className="rounded-lg shadow-xl mb-8" />
```

---

### 🔧 Exemplos de Adaptação para Outros Serviços

#### **Exemplo 1: Empilhadeiras**
```tsx
// Imports
import heroImage from "@/assets/empilhadeira-hero.jpg";
import partsImage from "@/assets/pecas-empilhadeira.jpg";

// Galeria
const galleryImages = [
  { src: heroImage, alt: "Empilhadeira industrial", title: "Empilhadeiras" },
  { src: partsImage, alt: "Peças de empilhadeira", title: "Peças Originais" },
];
```

#### **Exemplo 2: Equipamentos Médicos**
```tsx
// Imports
import heroImage from "@/assets/equipamento-medico-hero.jpg";
import partsImage from "@/assets/pecas-medicas.jpg";

// Galeria
const galleryImages = [
  { src: heroImage, alt: "Equipamento médico hospitalar", title: "Equipamentos" },
  { src: partsImage, alt: "Peças e componentes médicos", title: "Componentes" },
];
```

#### **Exemplo 3: Ar Condicionado**
```tsx
// Imports
import heroImage from "@/assets/ar-condicionado-hero.jpg";
import partsImage from "@/assets/pecas-ar-condicionado.jpg";

// Galeria
const galleryImages = [
  { src: heroImage, alt: "Sistema de ar condicionado industrial", title: "Sistemas HVAC" },
  { src: partsImage, alt: "Peças de ar condicionado", title: "Peças e Filtros" },
];
```

---

### ⚠️ Checklist de Alteração de Imagens

Use esta lista ao adaptar para outro serviço:

- [ ] **Substituir imagens** na pasta `src/assets/` (9 imagens no total)
- [ ] **Atualizar imports** (Linhas 10-18 do `Index.tsx`)
- [ ] **Atualizar textos ALT** das imagens (importante para acessibilidade e SEO)
- [ ] **Atualizar títulos** na galeria (Linhas 25-35)
- [ ] **Otimizar tamanho** das imagens (< 500 KB cada)
- [ ] **Testar responsividade** em mobile, tablet e desktop
- [ ] **Verificar contraste** de texto sobre imagens (Hero Section)

---

### 🌐 Recursos para Obter Imagens

#### **Bancos de Imagens Gratuitas:**
- [Unsplash](https://unsplash.com/) - Alta qualidade, uso comercial livre
- [Pexels](https://www.pexels.com/) - Fotos e vídeos gratuitos
- [Pixabay](https://pixabay.com/) - Milhões de imagens gratuitas
- [Freepik](https://www.freepik.com/) - Fotos, vetores e ilustrações

#### **Ferramentas de Edição:**
- [Canva](https://www.canva.com/) - Editor online fácil
- [Photopea](https://www.photopea.com/) - Alternativa gratuita ao Photoshop
- [Remove.bg](https://www.remove.bg/) - Remover fundo de imagens

#### **Compressão de Imagens:**
- [TinyPNG](https://tinypng.com/) - Compressão inteligente
- [Squoosh](https://squoosh.app/) - Ferramenta do Google
- [ImageOptim](https://imageoptim.com/) - App para Mac

---

### 💡 Dicas de SEO para Imagens

1. **Nomes de Arquivo Descritivos**
   ```
   ❌ Ruim: IMG_1234.jpg
   ✅ Bom: manutencao-empilhadeira-industrial.jpg
   ```

2. **Textos ALT Relevantes**
   ```tsx
   ❌ Ruim: alt="imagem"
   ✅ Bom: alt="Técnico realizando manutenção preventiva em empilhadeira industrial"
   ```

3. **Títulos Informativos**
   ```tsx
   ❌ Ruim: title="Foto 1"
   ✅ Bom: title="Manutenção Preventiva de Empilhadeiras"
   ```

4. **Formatos Modernos**
   - Use WebP quando possível (melhor compressão)
   - Fallback para JPG para compatibilidade

---

**Desenvolvido para o projeto BalançasPro** 🎯
