export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tags: string[];
  category: string;
  status: "Em desenvolvimento" | "Disponível" | "Privado";
  github?: string;
  demo?: string;
  highlights: string[];
  problem: string;
  solution: string;
  architecture: string;
  lessons: string[];
  color: string;
  icon: string;
}

export const projects: Project[] = [
  {
    slug: "milk-run-manager-pro",
    title: "Milk Run Manager Pro",
    subtitle: "Gestão inteligente de coletas programadas",
    description: "Sistema web para gestão de rotas de Milk Run, com otimização de coletas, controle de fornecedores e indicadores de desempenho em tempo real.",
    longDesc: "Plataforma completa para planejamento e execução de rotas de Milk Run em operações de supply chain. Integra fornecedores, calendário de coletas, KPIs de OTD e análises de custo por rota.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Chart.js"],
    category: "Supply Chain",
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    highlights: ["Otimização de rotas via algoritmo guloso", "Dashboard com KPIs em tempo real", "Gestão de fornecedores e contratos", "Alertas de desvio de OTD"],
    problem: "Operações de Milk Run gerenciadas via planilhas Excel com alto risco de erro, falta de visibilidade em tempo real e dificuldade de análise histórica.",
    solution: "Plataforma web centralizada com mapa de rotas interativo, painel de KPIs em tempo real e módulo de gestão de fornecedores com histórico de desempenho.",
    architecture: "Next.js 15 + React 19 no front; API Routes no back; PostgreSQL com Prisma ORM; deploy na Vercel com Supabase.",
    lessons: ["Algoritmos de otimização de rota exigem dados limpos de endereço", "Stakeholders de supply chain preferem KPIs visuais simples a tabelas"],
    color: "#3B67AB",
    icon: "🚚",
  },
  {
    slug: "dashboard-compras-executivo",
    title: "Dashboard de Compras Executivo",
    subtitle: "Inteligência de compras para liderança",
    description: "Dashboard executivo de procurement com curva ABC, ranking de fornecedores, análise de saving e KPIs estratégicos — construído em React e Chart.js.",
    longDesc: "Dashboard premium desenvolvido para apresentação executiva e uso diário em gestão de compras. Inclui análise de curva ABC dinâmica, mapa de calor de fornecedores e simulador de saving.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "HTML/CSS"],
    category: "Analytics",
    status: "Disponível",
    github: "https://github.com/Alessandro-phn",
    demo: "https://github.com/Alessandro-phn",
    highlights: ["Curva ABC dinâmica e interativa", "Ranking de fornecedores com score", "Simulador de saving por categoria", "Export PDF para boardroom"],
    problem: "Falta de visibilidade executiva das métricas de compras — gestores dependem de relatórios manuais sem padronização nem histórico.",
    solution: "Dashboard web com dados simulados realistas, gráficos interativos e layout otimizado para apresentações de diretoria.",
    architecture: "React SPA com Chart.js para visualizações; CSS customizado com glassmorphism; dados em JSON estático para demo.",
    lessons: ["Menos é mais em dashboards executivos", "Cores e hierarquia visual são tão importantes quanto os dados"],
    color: "#C9A84C",
    icon: "📊",
  },
  {
    slug: "procurement-analytics",
    title: "Procurement Analytics Dashboard",
    subtitle: "Análise profunda de dados de procurement",
    description: "Plataforma de analytics para procurement com análise de spend, performance de fornecedores, benchmarks de mercado e alertas inteligentes.",
    longDesc: "Sistema completo de business intelligence voltado à área de compras. Permite análise de spend por categoria, comparativo de fornecedores, histórico de negociações e benchmarks automáticos.",
    tags: ["Power BI", "Python", "Pandas", "SQL", "Azure", "DAX"],
    category: "BI & Analytics",
    status: "Privado",
    highlights: ["Análise de spend por categoria e fornecedor", "Score de performance de fornecedores", "Benchmarks automáticos de mercado", "Alertas de desvio e anomalias"],
    problem: "Dados de procurement fragmentados em múltiplos sistemas, sem visão consolidada para tomada de decisão estratégica.",
    solution: "Pipeline de dados Python/Pandas integrado ao Power BI com modelos DAX otimizados e atualização automática via Azure Data Factory.",
    architecture: "Python para ETL → SQL Server → Power BI Premium com refresh automático; modelo estrela com tabelas fato e dimensão.",
    lessons: ["Qualidade dos dados é o maior desafio em projetos de BI", "DAX medidas calculadas vs colunas calculadas — impacto enorme em performance"],
    color: "#5A7FB8",
    icon: "📈",
  },
  {
    slug: "safrafacil",
    title: "SafraFácil",
    subtitle: "Gestão agrícola inteligente",
    description: "App web para gestão de safras, controle de insumos, monitoramento de custos e análise de produtividade para o agronegócio brasileiro.",
    longDesc: "Plataforma focada no pequeno e médio produtor rural, com módulos de planejamento de safra, controle de estoque de insumos, cálculo de custo por hectare e previsão de colheita.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
    category: "Agronegócio",
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    highlights: ["Planejamento de safra por talhão", "Controle de insumos e defensivos", "Custo por hectare em tempo real", "Previsão de colheita com histórico"],
    problem: "Produtores rurais gerenciam suas safras em papel ou planilhas simples, sem visão de custo, produtividade ou histórico confiável.",
    solution: "App web responsivo (mobile-first) com UX simples, focado em produtores sem expertise técnica mas com necessidade real de dados.",
    architecture: "Next.js + Supabase (auth + banco de dados) + Vercel; PWA para uso offline em áreas com sinal fraco.",
    lessons: ["UX para usuários não-técnicos exige testes presenciais", "Dados offline-first são críticos para aplicações rurais"],
    color: "#4A8B5C",
    icon: "🌾",
  },
  {
    slug: "campo-de-terra-fc",
    title: "Campo de Terra FC",
    subtitle: "Arcade brasileiro de futebol de rua",
    description: "Jogo arcade 3D de futebol de rua brasileiro desenvolvido em Unity, com física realista, jogadores únicos e a vibe autêntica do pelada.",
    longDesc: "Jogo arcade desenvolvido em Unity com C#, inspirado no futebol de rua brasileiro. Features incluem física de bola realista, sistema de dribles, múltiplos campos (terra, asfalto, quadra) e modo torneio.",
    tags: ["Unity", "C#", "3D Physics", "Shader Graph", "Cinemachine", "Unity UI Toolkit"],
    category: "Game Dev",
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    highlights: ["Física de bola realista com spin e efeito", "Sistema de drible e finalização", "Múltiplos campos temáticos", "IA de adversários com comportamento dinâmico"],
    problem: "Falta de jogos de futebol de rua brasileiro no mercado mobile/PC que capturem a cultura e estética do pelada nacional.",
    solution: "Jogo arcade com controles simples, câmera cinemática e arte estilizada que celebra o futebol de rua brasileiro — acessível e viciante.",
    architecture: "Unity 2022 LTS; C# com padrão MVC; Addressables para assets; Unity Physics 2.0; Shader Graph para efeitos visuais.",
    lessons: ["Physics em Unity exige calibração extensa para sensação de qualidade", "Feedback de controle é mais importante que gráficos em jogos de esporte"],
    color: "#2D7A4A",
    icon: "⚽",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
