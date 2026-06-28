# Alessandro Guimarães Pereira — Portfólio Profissional

Site de portfólio executivo desenvolvido com Next.js 15, React 19 e Framer Motion.

## Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + TypeScript
- **Estilo**: Tailwind CSS v4 + CSS customizado
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Hospedagem**: Vercel

## Rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Build para produção

```bash
npm run build
npm start
```

## Publicar na Vercel

### Opção 1 — Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opção 2 — Via GitHub
1. Suba o projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. As configurações são detectadas automaticamente
4. Clique em **Deploy**

## Personalizar foto de perfil

Substitua o placeholder no `HeroSection.tsx`:
```tsx
// Linha com: <div className="w-full h-full flex items-center justify-center"...>
// Substituir por:
<Image src="/foto.jpg" alt="Alessandro Pereira" fill className="object-cover" />
```
E adicione `foto.jpg` na pasta `public/`.

## Personalizar WhatsApp

No arquivo `ContatoSection.tsx`, substitua o número:
```tsx
href="https://wa.me/5511999999999"  // <- seu número com DDI+DDD
```

## Estrutura do projeto

```
portfolio/
├── app/
│   ├── page.tsx              # Home (composição de seções)
│   ├── layout.tsx            # Layout global + metadados SEO
│   ├── globals.css           # Design system CSS
│   ├── sitemap.ts            # Sitemap automático
│   ├── robots.ts             # Robots.txt
│   └── projetos/[slug]/      # Páginas individuais de projeto
├── components/
│   ├── Navbar.tsx            # Navbar com scroll e dark mode
│   ├── HeroSection.tsx       # Hero com foto + CTAs
│   ├── SobreSection.tsx      # About + Timeline
│   ├── ExperienciaSection.tsx
│   ├── ResultadosSection.tsx # KPIs animados
│   ├── ProjetosSection.tsx   # Cards de projetos
│   ├── CompetenciasSection.tsx
│   ├── CertificacoesSection.tsx
│   ├── BlogSection.tsx
│   ├── ContatoSection.tsx    # Formulário + links
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   └── ThemeProvider.tsx
├── lib/
│   └── projects.ts           # Dados dos projetos
└── public/
    └── favicon.svg
```

## Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| Navy 950 | `#060D18` | Background mais escuro |
| Navy 900 | `#0A1628` | Background principal |
| Navy 600 | `#1E3A5F` | Cards e superfícies |
| Gold 500 | `#C9A84C` | Accent principal |
| Gold 300 | `#E8C96A` | Destaques e hover |

## Integrar formulário de contato

Para produção, integre o formulário com:
- **Resend** (recomendado): `npm install resend`
- **EmailJS**: sem backend
- **Formspree**: apenas configuração de action

---

Portfólio desenvolvido por Alessandro Guimarães Pereira © 2025
