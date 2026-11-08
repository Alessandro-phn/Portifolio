export interface ProjectCopy {
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  category: string;
  status: "Em desenvolvimento" | "Disponível" | "Privado" | "In development" | "Available" | "Private";
  highlights: string[];
  problem: string;
  solution: string;
  architecture: string;
  lessons: string[];
}

export interface Project extends ProjectCopy {
  slug: string;
  tags: string[];
  github?: string;
  color: string;
  icon: string;
  english: ProjectCopy;
}

const githubProfile = "https://github.com/Alessandro-phn";

export const projects: Project[] = [
  {
    slug: "milk-run-manager-pro",
    title: "Milk Run Manager Pro",
    subtitle: "SaaS de gestão logística para operações de Milk Run",
    description: "SaaS de gestão logística com autenticação, perfis de acesso, estrutura multiempresa com RLS, APIs REST, dashboards e auditoria.",
    longDesc: "Projeto SaaS de gestão logística desenvolvido com Next.js, React, TypeScript, Supabase e PostgreSQL. Inclui autenticação, controle de acesso por perfil, estrutura multiempresa com RLS, APIs REST, dashboards e auditoria, com preparação para integração com Power BI e ERPs.",
    category: "Supply Chain",
    status: "Em desenvolvimento",
    highlights: ["Autenticação e acesso por perfil", "Estrutura multiempresa com RLS", "APIs REST, dashboards e auditoria", "Preparação para integração com Power BI e ERPs"],
    problem: "Desenvolver uma aplicação SaaS para apoiar a gestão logística de operações de Milk Run.",
    solution: "Aplicação web com autenticação, perfis de acesso, suporte multiempresa com RLS, APIs REST, dashboards e trilha de auditoria.",
    architecture: "Next.js, React e TypeScript na aplicação; Supabase e PostgreSQL na camada de dados; estrutura preparada para integração com Power BI e ERPs.",
    lessons: ["Controle de acesso por perfil", "RLS para estrutura multiempresa", "Auditoria e dashboards", "Preparação de integrações com BI e ERP"],
    english: {
      title: "Milk Run Manager Pro",
      subtitle: "SaaS logistics management for Milk Run operations",
      description: "Logistics management SaaS with authentication, role-based access, a multi-company structure with RLS, REST APIs, dashboards, and audit trails.",
      longDesc: "Logistics management SaaS project built with Next.js, React, TypeScript, Supabase, and PostgreSQL. It includes authentication, role-based access, a multi-company structure with RLS, REST APIs, dashboards, and audit trails, with planned integrations for Power BI and ERPs.",
      category: "Supply Chain",
      status: "In development",
      highlights: ["Authentication and role-based access", "Multi-company structure with RLS", "REST APIs, dashboards, and audit trails", "Prepared for Power BI and ERP integrations"],
      problem: "Develop a SaaS application to support logistics management for Milk Run operations.",
      solution: "A web application with authentication, role-based access, multi-company support with RLS, REST APIs, dashboards, and audit trails.",
      architecture: "Next.js, React, and TypeScript for the application; Supabase and PostgreSQL for the data layer; prepared for Power BI and ERP integrations.",
      lessons: ["Role-based access control", "RLS for multi-company data", "Audit trails and dashboards", "Planning BI and ERP integrations"],
    },
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    github: githubProfile,
    color: "#3B67AB",
    icon: "🚚",
  },
  {
    slug: "dashboard-compras-executivo",
    title: "Dashboard de Compras Executivo",
    subtitle: "Inteligência de compras para liderança",
    description: "Dashboard executivo de procurement com curva ABC, ranking de fornecedores, análise de saving e KPIs estratégicos — construído em React e Chart.js.",
    longDesc: "Dashboard desenvolvido para apresentação executiva e uso na gestão de compras. Inclui análise dinâmica de curva ABC, mapa de calor de fornecedores e simulador de saving. A demonstração utiliza dados simulados.",
    category: "Analytics",
    status: "Disponível",
    highlights: ["Curva ABC dinâmica e interativa", "Ranking de fornecedores com score", "Simulador de saving por categoria", "Exportação em PDF"],
    problem: "Falta de visibilidade executiva das métricas de compras — gestores dependem de relatórios manuais sem padronização nem histórico.",
    solution: "Dashboard web com dados simulados, gráficos interativos e layout para apresentações executivas.",
    architecture: "React SPA com Chart.js para visualizações; CSS customizado; dados em JSON estático para demonstração.",
    lessons: ["Hierarquia visual ajuda a tornar dashboards executivos mais claros", "Cores e organização visual apoiam a leitura dos dados"],
    english: {
      title: "Executive Procurement Dashboard",
      subtitle: "Procurement intelligence for leadership",
      description: "Executive procurement dashboard with ABC analysis, supplier ranking, savings analysis, and strategic KPIs, built with React and Chart.js.",
      longDesc: "Dashboard designed for executive presentations and procurement management. It includes dynamic ABC analysis, a supplier heat map, and a savings simulator. The demo uses simulated data.",
      category: "Analytics",
      status: "Available",
      highlights: ["Interactive ABC analysis", "Supplier ranking with scores", "Category savings simulator", "PDF export"],
      problem: "Limited executive visibility into procurement metrics, with reliance on manual reports lacking standardization and history.",
      solution: "A web dashboard with simulated data, interactive charts, and a layout for executive presentations.",
      architecture: "React single-page application with Chart.js visualizations, custom CSS, and static JSON data for the demo.",
      lessons: ["Visual hierarchy makes executive dashboards easier to scan", "Color and layout support data readability"],
    },
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "HTML/CSS"],
    github: githubProfile,
    color: "#C9A84C",
    icon: "📊",
  },
  {
    slug: "procurement-analytics",
    title: "Procurement Analytics Dashboard",
    subtitle: "Análise de dados aplicada a Procurement",
    description: "Projeto privado de análise de gastos por categoria, desempenho de fornecedores e identificação de desvios em compras.",
    longDesc: "Projeto privado de inteligência de compras voltado à análise de gastos por categoria, desempenho de fornecedores e identificação de desvios. O acesso aos detalhes é restrito.",
    category: "BI & Analytics",
    status: "Privado",
    highlights: ["Análise de gastos por categoria e fornecedor", "Indicadores de desempenho de fornecedores", "Identificação de desvios"],
    problem: "Dados de procurement fragmentados podem dificultar uma visão consolidada para decisões de compras.",
    solution: "Projeto privado de análise de dados voltado à visibilidade de gastos, fornecedores e oportunidades de melhoria.",
    architecture: "Detalhes técnicos não divulgados porque o projeto é privado.",
    lessons: ["Qualidade e consistência dos dados são essenciais para análises de compras", "Indicadores devem apoiar decisões e prioridades da área"],
    english: {
      title: "Procurement Analytics Dashboard",
      subtitle: "Data analysis applied to procurement",
      description: "Private project for category spend analysis, supplier performance, and procurement variance identification.",
      longDesc: "Private procurement intelligence project focused on category spend, supplier performance, and variance identification. Access to project details is restricted.",
      category: "BI & Analytics",
      status: "Private",
      highlights: ["Category and supplier spend analysis", "Supplier performance indicators", "Variance identification"],
      problem: "Fragmented procurement data can make it difficult to build a consolidated view for purchasing decisions.",
      solution: "A private data analysis project focused on spend, suppliers, and improvement opportunities.",
      architecture: "Technical details are not disclosed because the project is private.",
      lessons: ["Data quality and consistency are essential to procurement analysis", "Metrics should support team decisions and priorities"],
    },
    tags: ["Power BI", "Python", "SQL", "DAX"],
    color: "#5A7FB8",
    icon: "📈",
  },
  {
    slug: "safrafacil",
    title: "SafraFácil",
    subtitle: "Gestão agrícola inteligente",
    description: "Aplicação web para gestão de safras, controle de insumos, custos por hectare e análise de produtividade no agronegócio brasileiro.",
    longDesc: "Plataforma em desenvolvimento para pequenos e médios produtores rurais, com planejamento de safra, controle de estoque de insumos, cálculo de custo por hectare e análise de produtividade.",
    category: "Agronegócio",
    status: "Em desenvolvimento",
    highlights: ["Planejamento de safra por talhão", "Controle de insumos", "Custo por hectare", "Análise de produtividade"],
    problem: "Produtores rurais podem depender de papel ou planilhas simples para acompanhar custos, produtividade e histórico.",
    solution: "Aplicação web responsiva em desenvolvimento para organizar informações de produção e apoiar o acompanhamento da safra.",
    architecture: "Next.js, Supabase, TypeScript, and Chart.js.",
    lessons: ["Interfaces simples ajudam usuários sem experiência técnica", "Acesso a dados em áreas com conectividade limitada precisa ser considerado"],
    english: {
      title: "SafraFácil",
      subtitle: "Agricultural management application",
      description: "Web application for crop planning, input tracking, cost per hectare, and productivity analysis for Brazilian agribusiness.",
      longDesc: "Platform in development for small and midsize farmers, with crop planning, input inventory tracking, cost-per-hectare calculation, and productivity analysis.",
      category: "Agribusiness",
      status: "In development",
      highlights: ["Field-level crop planning", "Input tracking", "Cost per hectare", "Productivity analysis"],
      problem: "Farmers may rely on paper or basic spreadsheets to track costs, productivity, and history.",
      solution: "A responsive web application in development to organize production information and support crop tracking.",
      architecture: "Next.js, Supabase, TypeScript, and Chart.js.",
      lessons: ["Simple interfaces support users without technical backgrounds", "Connectivity constraints should be considered for rural users"],
    },
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
    github: githubProfile,
    color: "#4A8B5C",
    icon: "🌾",
  },
  {
    slug: "campo-de-terra-fc",
    title: "Campo de Terra FC",
    subtitle: "Arcade brasileiro de futebol de rua",
    description: "Jogo arcade 3D de futebol de rua brasileiro desenvolvido em Unity.",
    longDesc: "Jogo arcade em desenvolvimento com Unity e C#, inspirado no futebol de rua brasileiro.",
    category: "Game Dev",
    status: "Em desenvolvimento",
    highlights: ["Física de bola", "Sistema de dribles e finalização", "Múltiplos campos", "Comportamento de adversários"],
    problem: "Explorar o desenvolvimento de um jogo arcade inspirado no futebol de rua brasileiro.",
    solution: "Jogo arcade em desenvolvimento com controles simples, câmera cinematográfica e cenários inspirados no futebol de rua.",
    architecture: "Unity and C#.",
    lessons: ["A física precisa de calibração para criar a sensação desejada", "A resposta dos controles é importante para jogos de esporte"],
    english: {
      title: "Campo de Terra FC",
      subtitle: "Brazilian street soccer arcade game",
      description: "3D arcade game inspired by Brazilian street soccer, developed in Unity.",
      longDesc: "Arcade game in development with Unity and C#, inspired by Brazilian street soccer.",
      category: "Game Development",
      status: "In development",
      highlights: ["Ball physics", "Dribbling and shooting mechanics", "Multiple playing surfaces", "Opponent behavior"],
      problem: "Explore the development of an arcade game inspired by Brazilian street soccer.",
      solution: "Arcade game in development with simple controls, cinematic camera, and settings inspired by street soccer.",
      architecture: "Unity and C#.",
      lessons: ["Physics requires calibration to create the intended feel", "Control responsiveness matters in sports games"],
    },
    tags: ["Unity", "C#", "3D Physics", "Shader Graph", "Cinemachine", "Unity UI Toolkit"],
    github: githubProfile,
    color: "#2D7A4A",
    icon: "⚽",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
