import type { Locale } from './types'

export type Token = string | { kw: string }

export type SkillGroupBefore = { label: string; items: string[] }
export type SkillItemAfter = string | { kw: string }
export type SkillGroupAfter = { label: string; items: SkillItemAfter[] }

export type BeforeCv = {
  name: string
  title: string
  summary: string
  contact: string[]
  skills: SkillGroupBefore[]
  experience: {
    company: string
    role: string
    bullets: string[]
  }
  education: { degree: string; detail: string }
  sections: {
    knowledge: string
    experience: string
    education: string
  }
}

export type AfterCv = {
  name: string
  subtitlePrefix: string
  titleKws: string[]
  contactLine: string
  summary: Token[]
  skills: SkillGroupAfter[]
  experience: {
    roleTitle: string
    companyLine: string
    context: Token[]
    bullets: Token[][]
  }
  education: { degree: string; detail: string }
  sections: {
    summary: string
    keySkills: string
    experience: string
    education: string
  }
}

/** Fragmentos do parágrafo narrativo; `emphasis` usa <strong> no componente */
export type StoryPart = { text: string; emphasis?: boolean }

export type BeforeAfterDemo = {
  beforeTopics: string[]
  afterTopics: string[]
  story: StoryPart[]
  before: BeforeCv
  after: AfterCv
}

const ptBR: BeforeAfterDemo = {
  beforeTopics: [
    'Layout gráfico com colunas e cabeçalho escuro, como muitos CVs “criativos” entregues em PDF.',
    'Competências listadas de forma genérica, pouco alinhadas à vaga de Dev Júnior .NET.',
    'Resumo genérico de full stack, sem espelhar as palavras-chave do anúncio.',
    'Experiência descrita sem priorizar C#, .NET e SQL para a triagem automática.',
  ],
  afterTopics: [
    'Estrutura linear e legível, pensada para parsers ATS e leitura rápida por recrutadores.',
    'Competências reorganizadas em blocos (linguagens, frameworks, dados, práticas).',
    'Resumo reescrito com termos da vaga destacados visualmente.',
    'Bullets da experiência enfatizam stack e resultados relevantes para a posição.',
  ],
  story: [
    { text: 'Guilherme Oliveira', emphasis: true },
    {
      text: ' enviou o CV para uma vaga de Desenvolvedor Júnior em .NET. O AdaptCV reorganizou as competências, reescreveu o resumo com as ',
    },
    { text: 'keywords da vaga destacadas', emphasis: true },
    {
      text: ', removeu informações irrelevantes e adotou um formato ',
    },
    { text: 'compatível com sistemas ATS', emphasis: true },
    { text: '.' },
  ],
  before: {
    name: 'GUILHERME OLIVEIRA',
    title: 'S O F T W A R E   D E V E L O P E R',
    summary:
      'Desenvolvedor de Software Full-Stack, com 1 ano de experiência na área de desenvolvimento, atuando principalmente com as tecnologias .NET (C#) e Python. Hoje busco oportunidade como Desenvolvedor Júnior para consolidar meu aprendizado.',
    contact: [
      '(XX) XXXXX-XXXX',
      'Bahia',
      'candidato@email.com',
      'github.com/usuario',
    ],
    skills: [
      { label: 'Linguagens', items: ['JavaScript', 'TypeScript', 'C#', 'Python'] },
      { label: 'Bibliotecas', items: ['ReactJS', 'ShadcnUI'] },
      { label: 'Frameworks', items: ['NextJS', 'TailwindCSS', 'Django', '.Net'] },
      { label: 'Ferramentas', items: ['Git', 'Docker', 'Azure DevOps', 'PostgreSQL'] },
      { label: 'Soft-Skills', items: ['Trabalho equipe', 'Comunicação', 'Aprendizagem'] },
    ],
    experience: {
      company: 'TechSolutions',
      role: 'Software Developer, Março 2025 – Atual',
      bullets: [
        'Colaborei no desenvolvimento usando C#, .NET, SQL Server no projeto interno de carga.',
        'Atuei no desenvolvimento do MVP de métricas com Python, Django, PostgreSQL e Docker.',
        'Realizei testes e documentações de funcionalidades.',
      ],
    },
    education: {
      degree: 'Bacharelado em Ciências da Computação',
      detail: 'Instituto Federal • 2022–2027',
    },
    sections: {
      knowledge: 'Conhecimentos e Competências',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
    },
  },
  after: {
    name: 'Guilherme Oliveira',
    subtitlePrefix: 'Dev. de Software Júnior',
    titleKws: ['C#', '.NET', 'JavaScript', 'Desenvolvimento Web'],
    contactLine:
      '(XX) XXXXX-XXXX · candidato@email.com · Bahia, Brasil',
    summary: [
      'Desenvolvedor de Software com experiência prática em desenvolvimento web utilizando ',
      { kw: 'C#' },
      ', ',
      { kw: '.NET' },
      ' e ',
      { kw: 'JavaScript' },
      ', atuando na construção, manutenção e evolução de aplicações. Experiência com ',
      { kw: 'backend' },
      ', ',
      { kw: 'bancos de dados' },
      ' e integração de serviços. Forte interesse em ',
      { kw: 'boas práticas' },
      ' e ambientes colaborativos de alta performance.',
    ],
    skills: [
      {
        label: 'Linguagens',
        items: [{ kw: 'C#' }, { kw: 'JavaScript' }, { kw: 'TypeScript' }, { kw: 'Python' }],
      },
      {
        label: 'Frameworks',
        items: [{ kw: '.NET / ASP.NET' }, { kw: 'React' }, 'Next.js', 'Django', 'TailwindCSS'],
      },
      { label: 'Banco de Dados', items: [{ kw: 'SQL Server' }, 'PostgreSQL'] },
      { label: 'DevOps', items: ['Git', 'GitHub', { kw: 'Docker' }, 'Azure DevOps'] },
      {
        label: 'Práticas',
        items: [{ kw: 'Testes de software' }, { kw: 'Clean Code' }, { kw: 'Dev. Ágil' }],
      },
    ],
    experience: {
      roleTitle: 'Desenvolvedor de Software',
      companyLine: 'TechSolutions — Brasil · Mar 2025 – Atual',
      context: [
        'Atuação no desenvolvimento de aplicações web, com foco em ',
        { kw: 'backend' },
        ' utilizando ',
        { kw: 'C#' },
        ' e integração com bancos de dados relacionais.',
      ],
      bullets: [
        [{ kw: 'C#' }, ', ', { kw: '.NET' }, ' e ', { kw: 'SQL Server' }, ' no projeto de carga'],
        [
          'Desenvolvimento de ',
          { kw: 'MVP' },
          ' utilizando ',
          { kw: 'Python' },
          ', Django, PostgreSQL e ',
          { kw: 'Docker' },
        ],
        ['Manutenção e melhoria contínua de sistemas existentes'],
        ['Testes, documentação e colaboração na definição de requisitos'],
      ],
    },
    education: {
      degree: 'Bacharelado em Ciências da Computação',
      detail: 'Instituto Federal · 2022–2027',
    },
    sections: {
      summary: 'Resumo Profissional',
      keySkills: 'Competências-Chave',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
    },
  },
}

const en: BeforeAfterDemo = {
  beforeTopics: [
    'Graphic layout with columns and a dark header—common in heavily styled PDF resumes.',
    'Skills listed in a generic way, weakly aligned with a Junior .NET developer role.',
    'Generic full-stack summary that does not mirror the job posting keywords.',
    'Experience bullets without prioritizing C#, .NET, and SQL for automated screening.',
  ],
  afterTopics: [
    'Linear, scannable structure suited to ATS parsers and quick recruiter review.',
    'Skills regrouped into clear blocks (languages, frameworks, data, practices).',
    'Summary rewritten with job-relevant terms highlighted visually.',
    'Experience bullets emphasize stack and outcomes that match the role.',
  ],
  story: [
    { text: 'Guilherme Oliveira', emphasis: true },
    {
      text: ' applied for a Junior .NET Developer role. AdaptCV reorganized his skills, rewrote the summary with ',
    },
    { text: 'job keywords highlighted', emphasis: true },
    {
      text: ', removed irrelevant details, and moved to a format ',
    },
    { text: 'compatible with ATS systems', emphasis: true },
    { text: '.' },
  ],
  before: {
    name: 'GUILHERME OLIVEIRA',
    title: 'S O F T W A R E   D E V E L O P E R',
    summary:
      'Full-Stack Software Developer with 1 year of experience, working mainly with .NET (C#) and Python. Seeking a Junior Developer role to consolidate my learning.',
    contact: ['(XX) XXXXX-XXXX', 'Bahia', 'candidato@email.com', 'github.com/usuario'],
    skills: [
      { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C#', 'Python'] },
      { label: 'Libraries', items: ['React', 'ShadcnUI'] },
      { label: 'Frameworks', items: ['Next.js', 'Tailwind CSS', 'Django', '.NET'] },
      { label: 'Tools', items: ['Git', 'Docker', 'Azure DevOps', 'PostgreSQL'] },
      { label: 'Soft skills', items: ['Teamwork', 'Communication', 'Learning agility'] },
    ],
    experience: {
      company: 'TechSolutions',
      role: 'Software Developer, Mar 2025 – Present',
      bullets: [
        'Contributed to development with C#, .NET, and SQL Server on the internal load project.',
        'Worked on an MVP for metrics using Python, Django, PostgreSQL, and Docker.',
        'Performed testing and feature documentation.',
      ],
    },
    education: {
      degree: 'B.S. in Computer Science',
      detail: 'Federal Institute • 2022–2027',
    },
    sections: {
      knowledge: 'Skills & Competencies',
      experience: 'Work Experience',
      education: 'Education',
    },
  },
  after: {
    name: 'Guilherme Oliveira',
    subtitlePrefix: 'Junior Software Developer',
    titleKws: ['C#', '.NET', 'JavaScript', 'Web development'],
    contactLine: '(XX) XXXXX-XXXX · candidato@email.com · Bahia, Brazil',
    summary: [
      'Software Developer with hands-on web development experience using ',
      { kw: 'C#' },
      ', ',
      { kw: '.NET' },
      ', and ',
      { kw: 'JavaScript' },
      ', building, maintaining, and evolving applications. Experience with ',
      { kw: 'backend' },
      ', ',
      { kw: 'databases' },
      ', and service integration. Strong interest in ',
      { kw: 'best practices' },
      ' and high-performance collaborative environments.',
    ],
    skills: [
      {
        label: 'Languages',
        items: [{ kw: 'C#' }, { kw: 'JavaScript' }, { kw: 'TypeScript' }, { kw: 'Python' }],
      },
      {
        label: 'Frameworks',
        items: [{ kw: '.NET / ASP.NET' }, { kw: 'React' }, 'Next.js', 'Django', 'Tailwind CSS'],
      },
      { label: 'Databases', items: [{ kw: 'SQL Server' }, 'PostgreSQL'] },
      { label: 'DevOps', items: ['Git', 'GitHub', { kw: 'Docker' }, 'Azure DevOps'] },
      {
        label: 'Practices',
        items: [{ kw: 'Software testing' }, { kw: 'Clean Code' }, { kw: 'Agile development' }],
      },
    ],
    experience: {
      roleTitle: 'Software Developer',
      companyLine: 'TechSolutions — Brazil · Mar 2025 – Present',
      context: [
        'Building web applications with a focus on ',
        { kw: 'backend' },
        ' using ',
        { kw: 'C#' },
        ' and relational database integration.',
      ],
      bullets: [
        [{ kw: 'C#' }, ', ', { kw: '.NET' }, ', and ', { kw: 'SQL Server' }, ' on the load project'],
        [
          { kw: 'MVP' },
          ' development with ',
          { kw: 'Python' },
          ', Django, PostgreSQL, and ',
          { kw: 'Docker' },
        ],
        ['Maintenance and continuous improvement of existing systems'],
        ['Testing, documentation, and collaboration on requirements'],
      ],
    },
    education: {
      degree: 'B.S. in Computer Science',
      detail: 'Federal Institute · 2022–2027',
    },
    sections: {
      summary: 'Professional summary',
      keySkills: 'Key skills',
      experience: 'Work experience',
      education: 'Education',
    },
  },
}

const es: BeforeAfterDemo = {
  beforeTopics: [
    'Diseño gráfico con columnas y cabecera oscura, típico de CV en PDF muy elaborados.',
    'Competencias listadas de forma genérica, poco alineadas con un rol Junior .NET.',
    'Resumen full stack genérico que no refleja las palabras clave del anuncio.',
    'Experiencia sin priorizar C#, .NET y SQL para la triage automática.',
  ],
  afterTopics: [
    'Estructura lineal y fácil de escanear, pensada para ATS y lectura rápida.',
    'Competencias reorganizadas en bloques claros (lenguajes, frameworks, datos, prácticas).',
    'Resumen reescrito con términos del puesto resaltados visualmente.',
    'Viñetas que enfatizan stack y resultados relevantes para el cargo.',
  ],
  story: [
    { text: 'Guilherme Oliveira', emphasis: true },
    {
      text: ' envió su CV para una vacante de Desarrollador Junior en .NET. AdaptCV reorganizó las competencias, reescribió el resumen con las ',
    },
    { text: 'palabras clave del puesto resaltadas', emphasis: true },
    {
      text: ', eliminó información irrelevante y adoptó un formato ',
    },
    { text: 'compatible con sistemas ATS', emphasis: true },
    { text: '.' },
  ],
  before: {
    name: 'GUILHERME OLIVEIRA',
    title: 'S O F T W A R E   D E V E L O P E R',
    summary:
      'Desarrollador Full-Stack con 1 año de experiencia, trabajando principalmente con .NET (C#) y Python. Busco un rol Junior para consolidar mi aprendizaje.',
    contact: ['(XX) XXXXX-XXXX', 'Bahia', 'candidato@email.com', 'github.com/usuario'],
    skills: [
      { label: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'C#', 'Python'] },
      { label: 'Bibliotecas', items: ['React', 'ShadcnUI'] },
      { label: 'Frameworks', items: ['Next.js', 'Tailwind CSS', 'Django', '.NET'] },
      { label: 'Herramientas', items: ['Git', 'Docker', 'Azure DevOps', 'PostgreSQL'] },
      { label: 'Soft skills', items: ['Trabajo en equipo', 'Comunicación', 'Aprendizaje'] },
    ],
    experience: {
      company: 'TechSolutions',
      role: 'Software Developer, mar 2025 – Actual',
      bullets: [
        'Colaboré en desarrollo con C#, .NET y SQL Server en el proyecto interno de carga.',
        'Participé en el MVP de métricas con Python, Django, PostgreSQL y Docker.',
        'Pruebas y documentación de funcionalidades.',
      ],
    },
    education: {
      degree: 'Grado en Ciencias de la Computación',
      detail: 'Instituto Federal • 2022–2027',
    },
    sections: {
      knowledge: 'Conocimientos y competencias',
      experience: 'Experiencia profesional',
      education: 'Formación académica',
    },
  },
  after: {
    name: 'Guilherme Oliveira',
    subtitlePrefix: 'Desarrollador de software Junior',
    titleKws: ['C#', '.NET', 'JavaScript', 'Desarrollo web'],
    contactLine: '(XX) XXXXX-XXXX · candidato@email.com · Bahia, Brasil',
    summary: [
      'Desarrollador de software con experiencia práctica en desarrollo web con ',
      { kw: 'C#' },
      ', ',
      { kw: '.NET' },
      ' y ',
      { kw: 'JavaScript' },
      ', construyendo y manteniendo aplicaciones. Experiencia con ',
      { kw: 'backend' },
      ', ',
      { kw: 'bases de datos' },
      ' e integración de servicios. Fuerte interés en ',
      { kw: 'buenas prácticas' },
      ' y entornos colaborativos de alto rendimiento.',
    ],
    skills: [
      {
        label: 'Lenguajes',
        items: [{ kw: 'C#' }, { kw: 'JavaScript' }, { kw: 'TypeScript' }, { kw: 'Python' }],
      },
      {
        label: 'Frameworks',
        items: [{ kw: '.NET / ASP.NET' }, { kw: 'React' }, 'Next.js', 'Django', 'Tailwind CSS'],
      },
      { label: 'Bases de datos', items: [{ kw: 'SQL Server' }, 'PostgreSQL'] },
      { label: 'DevOps', items: ['Git', 'GitHub', { kw: 'Docker' }, 'Azure DevOps'] },
      {
        label: 'Prácticas',
        items: [{ kw: 'Pruebas de software' }, { kw: 'Clean Code' }, { kw: 'Desarrollo ágil' }],
      },
    ],
    experience: {
      roleTitle: 'Desarrollador de software',
      companyLine: 'TechSolutions — Brasil · mar 2025 – Actual',
      context: [
        'Desarrollo de aplicaciones web con foco en ',
        { kw: 'backend' },
        ' con ',
        { kw: 'C#' },
        ' e integración con bases de datos relacionales.',
      ],
      bullets: [
        [{ kw: 'C#' }, ', ', { kw: '.NET' }, ' y ', { kw: 'SQL Server' }, ' en el proyecto de carga'],
        [
          'Desarrollo de ',
          { kw: 'MVP' },
          ' con ',
          { kw: 'Python' },
          ', Django, PostgreSQL y ',
          { kw: 'Docker' },
        ],
        ['Mantenimiento y mejora continua de sistemas existentes'],
        ['Pruebas, documentación y colaboración en requisitos'],
      ],
    },
    education: {
      degree: 'Grado en Ciencias de la Computación',
      detail: 'Instituto Federal · 2022–2027',
    },
    sections: {
      summary: 'Resumen profesional',
      keySkills: 'Competencias clave',
      experience: 'Experiencia profesional',
      education: 'Formación académica',
    },
  },
}

const byLocale: Record<Locale, BeforeAfterDemo> = {
  'pt-BR': ptBR,
  en,
  es,
}

export function getBeforeAfterDemo(locale: Locale): BeforeAfterDemo {
  return byLocale[locale] ?? ptBR
}
