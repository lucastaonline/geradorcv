import type { Locale } from './types'

export type Token = string | { kw: string }

export type BeforeJob = {
  company: string
  period: string
  body: string
}

export type BeforeCv = {
  name: string
  title: string
  /** Faixa cinza sob o cabeçalho (visual “documento antigo”) */
  mutedBanner: string
  sections: {
    about: string
    experience: string
    skills: string
    education: string
  }
  aboutBody: string
  jobs: BeforeJob[]
  skillsLine: string
  education: { degree: string; detail: string }
}

export type AfterSkillRow = {
  label: string
  parts: Token[]
}

export type AfterJob = {
  roleTitle: string
  companyLine: string
  intro: Token[]
  highlights: Token[][]
}

export type AfterCv = {
  name: string
  subtitlePrefix: string
  headlineKeywords: Token[]
  contactLine: string
  summary: Token[]
  skillRows: AfterSkillRow[]
  jobs: AfterJob[]
  education: { degree: string; detail: string }
  sections: {
    summary: string
    keySkills: string
    experience: string
    education: string
  }
}

export type StoryPart = { text: string; emphasis?: boolean }

export type BeforeAfterDemo = {
  beforeTopics: string[]
  afterTopics: string[]
  story: StoryPart[]
  before: BeforeCv
  after: AfterCv
}

const CONTACT_PLACEHOLDER =
  'Salvador, BA · (XX) XXXXX-XXXX · candidato@email.com · linkedin.com/in/exemplo'

const ptBR: BeforeAfterDemo = {
  beforeTopics: [
    'Seções “Sobre mim” e experiências em texto corrido, sem métricas nem palavras-chave da vaga em destaque.',
    'Duas experiências em prosa: informações valiosas (usuários, sprint, stack) diluídas no parágrafo.',
    'Habilidades em uma única linha, misturando tecnologias sem hierarquia para leitura ou ATS.',
    'Pouca estrutura entre soft skills, entregas e stack — difícil escanear em segundos.',
  ],
  afterTopics: [
    'Resumo profissional com stack, números (8.000+ usuários, sprints) e keywords visíveis para ATS.',
    'Competências agrupadas por categoria (linguagens, frameworks, cloud, práticas, soft skills).',
    'Cada experiência com parágrafo de contexto + linhas de impacto com dados e keywords.',
    'Título com cargo-alvo e tecnologias da vaga (.NET, C#, Azure, SQL Server, Docker) em destaque.',
  ],
  story: [
    { text: 'Rafael Souza', emphasis: true },
    {
      text: ' — Dev Backend em busca de vaga .NET/Azure. O AdaptCV criou o ',
    },
    { text: 'resumo profissional', emphasis: true },
    { text: ' e a seção de ' },
    { text: 'competências', emphasis: true },
    {
      text: ', reposicionou os números que já existiam no texto como ',
    },
    { text: 'conquistas mensuráveis', emphasis: true },
    { text: ' e inseriu as ' },
    { text: 'keywords da vaga', emphasis: true },
    { text: ' nos lugares certos para passar no ATS.' },
  ],
  before: {
    name: 'Rafael Souza',
    title: 'Desenvolvedor Backend',
    mutedBanner: 'Documento original · texto contínuo',
    sections: {
      about: 'Sobre mim',
      experience: 'Experiência',
      skills: 'Habilidades',
      education: 'Formação',
    },
    aboutBody:
      'Profissional da área de desenvolvimento de software com experiência em backend. Gosto de trabalhar em equipe e estou sempre aprendendo coisas novas. Tenho conhecimento em diversas tecnologias e busco oportunidade para crescer na carreira.',
    jobs: [
      {
        company: 'DevCore Sistemas',
        period: 'Desenvolvedor — 2022 a 2023',
        body:
          'Trabalhei participando do desenvolvimento de APIs usando .NET e C#. O sistema atendia cerca de 8 mil usuários. Utilizei SQL Server e Docker. Participei de reuniões de planejamento e ajudei na documentação. Também trabalhei com deploy em Azure.',
      },
      {
        company: 'Altiva Tech',
        period: 'Desenvolvedor — 2024 até hoje',
        body:
          'Fiz manutenção de um sistema legado. Corrigi vários bugs que o time de produto ia priorizando. O time tinha 2 semanas de sprint e eu entregava em média 3 a 4 tarefas por ciclo. Auxiliei o time frontend com integrações React quando necessário.',
      },
    ],
    skillsLine:
      '.NET, C#, SQL Server, Azure, Docker, REST API, React, Git, Scrum',
    education: {
      degree: 'Bacharelado em Ciências da Computação',
      detail: 'Universidade Federal da Bahia — 2019–2023',
    },
  },
  after: {
    name: 'Rafael Souza',
    subtitlePrefix: 'Desenvolvedor Backend Pleno',
    headlineKeywords: [
      { kw: '.NET' },
      ' · ',
      { kw: 'C#' },
      ' · ',
      { kw: 'Azure' },
      ' · ',
      { kw: 'SQL Server' },
      ' · ',
      { kw: 'Docker' },
    ],
    contactLine: CONTACT_PLACEHOLDER,
    summary: [
      'Desenvolvedor ',
      { kw: 'Backend' },
      ' com 3 anos de experiência em ',
      { kw: 'APIs REST' },
      ' com ',
      { kw: '.NET/C#' },
      ', atuando em plataformas com ',
      { kw: '8.000+ usuários' },
      ' em ambientes cloud com ',
      { kw: 'Azure' },
      ' e ',
      { kw: 'Docker' },
      '. Histórico consistente de entrega em ',
      { kw: 'sprints ágeis' },
      ' com 3–4 tarefas por ciclo e forte colaboração entre times técnicos.',
    ],
    skillRows: [
      { label: 'Linguagens', parts: [{ kw: 'C#' }, ', JavaScript'] },
      { label: 'Frameworks', parts: [{ kw: '.NET' }, ', ', { kw: 'ASP.NET Core' }] },
      { label: 'Banco de Dados', parts: [{ kw: 'SQL Server' }] },
      { label: 'Cloud & DevOps', parts: [{ kw: 'Azure' }, ', ', { kw: 'Docker' }] },
      {
        label: 'Práticas',
        parts: [{ kw: 'REST APIs' }, ', ', { kw: 'Documentação técnica' }, ', ', { kw: 'Scrum' }],
      },
      {
        label: 'Soft Skills',
        parts: ['Trabalho em equipe, Comunicação entre times, Entrega contínua'],
      },
    ],
    jobs: [
      {
        roleTitle: 'Desenvolvedor Backend Pleno',
        companyLine: 'DevCore Sistemas — Salvador, BA · Jan 2022 – Dez 2023',
        intro: [
          'Desenvolvimento de ',
          { kw: 'APIs REST' },
          ' em ',
          { kw: '.NET/C#' },
          ' para plataforma com ',
          { kw: '8.000+ usuários' },
          ', infraestrutura containerizada via ',
          { kw: 'Docker' },
          ' e deploy em ',
          { kw: 'Azure' },
          '.',
        ],
        highlights: [
          [
            '— Documentou ',
            { kw: '100%' },
            ' dos contratos de API, eliminando ambiguidade entre times',
          ],
          [
            '— Atuou em todas as fases: desenvolvimento, infraestrutura e documentação técnica',
          ],
        ],
      },
      {
        roleTitle: 'Desenvolvedor Backend',
        companyLine: 'Altiva Tech — Salvador, BA · Jan 2024 – Atual',
        intro: [
          'Evolução de sistema legado em ambiente ágil com ',
          { kw: 'sprints de 2 semanas' },
          '.',
        ],
        highlights: [
          [
            '— Entregou consistentemente ',
            { kw: '3–4 tarefas por sprint' },
            ', mantendo ritmo acima da média',
          ],
          [
            '— Apoiou integrações ',
            { kw: 'React' },
            ' do time frontend, reduzindo dependências entre squads',
          ],
        ],
      },
    ],
    education: {
      degree: 'Bacharelado em Ciências da Computação',
      detail: 'Universidade Federal da Bahia — Salvador, BA · 2019–2023',
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
    '“About me” and job history in long paragraphs, with no standout metrics or job keywords.',
    'Two roles in prose: valuable details (users, sprint length, stack) buried in the narrative.',
    'Skills as one comma-separated line, mixing technologies without ATS-friendly grouping.',
    'Little separation between soft skills, delivery, and stack—hard to scan quickly.',
  ],
  afterTopics: [
    'Professional summary with stack, numbers (8,000+ users, sprints), and visible ATS keywords.',
    'Skills grouped by category (languages, frameworks, cloud, practices, soft skills).',
    'Each role with a context paragraph plus impact lines with data and keywords.',
    'Headline targets the role with key technologies (.NET, C#, Azure, SQL Server, Docker) highlighted.',
  ],
  story: [
    { text: 'Rafael Souza', emphasis: true },
    {
      text: ' — Backend developer targeting .NET/Azure roles. AdaptCV created the ',
    },
    { text: 'professional summary', emphasis: true },
    { text: ' and ' },
    { text: 'skills', emphasis: true },
    {
      text: ' sections, reframed numbers already in the text as ',
    },
    { text: 'measurable wins', emphasis: true },
    { text: ', and placed ' },
    { text: 'job keywords', emphasis: true },
    { text: ' where ATS parsers expect them.' },
  ],
  before: {
    name: 'Rafael Souza',
    title: 'Backend Developer',
    mutedBanner: 'Original résumé · narrative format',
    sections: {
      about: 'About me',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
    },
    aboutBody:
      'Software development professional with backend experience. I enjoy teamwork and am always learning. I know several technologies and am looking for opportunities to grow.',
    jobs: [
      {
        company: 'DevCore Sistemas',
        period: 'Developer — 2022 to 2023',
        body:
          'I helped build APIs using .NET and C#. The system served about 8,000 users. I used SQL Server and Docker. I joined planning meetings and helped with documentation. I also worked on deployments in Azure.',
      },
      {
        company: 'Altiva Tech',
        period: 'Developer — 2024 to present',
        body:
          'I maintained a legacy system. I fixed many bugs prioritized by the product team. We ran two-week sprints and I delivered about 3 to 4 tasks per cycle on average. I supported the frontend team with React integrations when needed.',
      },
    ],
    skillsLine:
      '.NET, C#, SQL Server, Azure, Docker, REST API, React, Git, Scrum',
    education: {
      degree: 'B.S. in Computer Science',
      detail: 'Federal University of Bahia — 2019–2023',
    },
  },
  after: {
    name: 'Rafael Souza',
    subtitlePrefix: 'Mid-level Backend Developer',
    headlineKeywords: [
      { kw: '.NET' },
      ' · ',
      { kw: 'C#' },
      ' · ',
      { kw: 'Azure' },
      ' · ',
      { kw: 'SQL Server' },
      ' · ',
      { kw: 'Docker' },
    ],
    contactLine:
      'Salvador, BA · (XX) XXXXX-XXXX · candidato@email.com · linkedin.com/in/exemplo',
    summary: [
      { kw: 'Backend' },
      ' developer with 3 years building ',
      { kw: 'REST APIs' },
      ' with ',
      { kw: '.NET/C#' },
      ' on platforms with ',
      { kw: '8,000+ users' },
      ' in cloud environments with ',
      { kw: 'Azure' },
      ' and ',
      { kw: 'Docker' },
      '. Consistent delivery in ',
      { kw: 'agile sprints' },
      ' with 3–4 tasks per cycle and strong collaboration across teams.',
    ],
    skillRows: [
      { label: 'Languages', parts: [{ kw: 'C#' }, ', JavaScript'] },
      { label: 'Frameworks', parts: [{ kw: '.NET' }, ', ', { kw: 'ASP.NET Core' }] },
      { label: 'Databases', parts: [{ kw: 'SQL Server' }] },
      { label: 'Cloud & DevOps', parts: [{ kw: 'Azure' }, ', ', { kw: 'Docker' }] },
      {
        label: 'Practices',
        parts: [{ kw: 'REST APIs' }, ', ', { kw: 'Technical documentation' }, ', ', { kw: 'Scrum' }],
      },
      {
        label: 'Soft skills',
        parts: ['Teamwork, Cross-team communication, Continuous delivery'],
      },
    ],
    jobs: [
      {
        roleTitle: 'Mid-level Backend Developer',
        companyLine: 'DevCore Sistemas — Salvador, BA · Jan 2022 – Dec 2023',
        intro: [
          'Built ',
          { kw: 'REST APIs' },
          ' with ',
          { kw: '.NET/C#' },
          ' for a platform with ',
          { kw: '8,000+ users' },
          ', containerized with ',
          { kw: 'Docker' },
          ' and deployed on ',
          { kw: 'Azure' },
          '.',
        ],
        highlights: [
          [
            '— Documented ',
            { kw: '100%' },
            ' of API contracts, removing ambiguity between teams',
          ],
          ['— Worked across development, infrastructure, and technical documentation'],
        ],
      },
      {
        roleTitle: 'Backend Developer',
        companyLine: 'Altiva Tech — Salvador, BA · Jan 2024 – Present',
        intro: [
          'Legacy system evolution in an agile environment with ',
          { kw: 'two-week sprints' },
          '.',
        ],
        highlights: [
          [
            '— Consistently delivered ',
            { kw: '3–4 tasks per sprint' },
            ', above team average',
          ],
          [
            '— Supported ',
            { kw: 'React' },
            ' integrations for frontend, reducing cross-squad dependencies',
          ],
        ],
      },
    ],
    education: {
      degree: 'B.S. in Computer Science',
      detail: 'Federal University of Bahia — Salvador, BA · 2019–2023',
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
    '“Sobre mí” e historial en párrafos largos, sin métricas ni palabras clave destacadas.',
    'Dos experiencias en prosa: datos valiosos (usuarios, sprint, stack) diluidos en el texto.',
    'Habilidades en una sola línea, mezclando tecnologías sin jerarquía para ATS o lectura rápida.',
    'Poca separación entre soft skills, entregas y stack — difícil de escanear.',
  ],
  afterTopics: [
    'Resumen con stack, cifras (8.000+ usuarios, sprints) y keywords visibles para ATS.',
    'Competencias agrupadas por categoría (lenguajes, frameworks, cloud, prácticas, soft skills).',
    'Cada rol con contexto + líneas de impacto con datos y keywords.',
    'Título alineado al puesto con tecnologías (.NET, C#, Azure, SQL Server, Docker) resaltadas.',
  ],
  story: [
    { text: 'Rafael Souza', emphasis: true },
    {
      text: ' — Desarrollador backend orientado a .NET/Azure. AdaptCV creó el ',
    },
    { text: 'resumen profesional', emphasis: true },
    { text: ' y la sección de ' },
    { text: 'competencias', emphasis: true },
    {
      text: ', reordenó los números del texto como ',
    },
    { text: 'logros medibles', emphasis: true },
    { text: ' e insertó las ' },
    { text: 'palabras clave del puesto', emphasis: true },
    { text: ' donde los ATS las esperan.' },
  ],
  before: {
    name: 'Rafael Souza',
    title: 'Desarrollador Backend',
    mutedBanner: 'Documento original · texto continuo',
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación',
    },
    aboutBody:
      'Profesional del desarrollo de software con experiencia en backend. Me gusta el trabajo en equipo y aprender. Conozco varias tecnologías y busco crecer en la carrera.',
    jobs: [
      {
        company: 'DevCore Sistemas',
        period: 'Desarrollador — 2022 a 2023',
        body:
          'Participé en el desarrollo de APIs con .NET y C#. El sistema atendía a unos 8 mil usuarios. Usé SQL Server y Docker. Asistí a reuniones de planificación y ayudé con la documentación. También trabajé con despliegues en Azure.',
      },
      {
        company: 'Altiva Tech',
        period: 'Desarrollador — 2024 hasta hoy',
        body:
          'Mantuve un sistema legado. Corregí muchos bugs priorizados por producto. El equipo tenía sprints de 2 semanas y entregaba de media 3 a 4 tareas por ciclo. Apoyé al frontend con integraciones React cuando hacía falta.',
      },
    ],
    skillsLine:
      '.NET, C#, SQL Server, Azure, Docker, REST API, React, Git, Scrum',
    education: {
      degree: 'Grado en Ciencias de la Computación',
      detail: 'Universidad Federal de Bahia — 2019–2023',
    },
  },
  after: {
    name: 'Rafael Souza',
    subtitlePrefix: 'Desarrollador Backend Pleno',
    headlineKeywords: [
      { kw: '.NET' },
      ' · ',
      { kw: 'C#' },
      ' · ',
      { kw: 'Azure' },
      ' · ',
      { kw: 'SQL Server' },
      ' · ',
      { kw: 'Docker' },
    ],
    contactLine:
      'Salvador, BA · (XX) XXXXX-XXXX · candidato@email.com · linkedin.com/in/exemplo',
    summary: [
      'Desarrollador ',
      { kw: 'Backend' },
      ' con 3 años en ',
      { kw: 'APIs REST' },
      ' con ',
      { kw: '.NET/C#' },
      ', en plataformas con ',
      { kw: '8.000+ usuarios' },
      ' en cloud con ',
      { kw: 'Azure' },
      ' y ',
      { kw: 'Docker' },
      '. Entrega constante en ',
      { kw: 'sprints ágiles' },
      ' con 3–4 tareas por ciclo y fuerte colaboración entre equipos.',
    ],
    skillRows: [
      { label: 'Lenguajes', parts: [{ kw: 'C#' }, ', JavaScript'] },
      { label: 'Frameworks', parts: [{ kw: '.NET' }, ', ', { kw: 'ASP.NET Core' }] },
      { label: 'Bases de datos', parts: [{ kw: 'SQL Server' }] },
      { label: 'Cloud y DevOps', parts: [{ kw: 'Azure' }, ', ', { kw: 'Docker' }] },
      {
        label: 'Prácticas',
        parts: [{ kw: 'REST APIs' }, ', ', { kw: 'Documentación técnica' }, ', ', { kw: 'Scrum' }],
      },
      {
        label: 'Soft skills',
        parts: ['Trabajo en equipo, Comunicación entre equipos, Entrega continua'],
      },
    ],
    jobs: [
      {
        roleTitle: 'Desarrollador Backend Pleno',
        companyLine: 'DevCore Sistemas — Salvador, BA · ene 2022 – dic 2023',
        intro: [
          'Desarrollo de ',
          { kw: 'APIs REST' },
          ' en ',
          { kw: '.NET/C#' },
          ' para plataforma con ',
          { kw: '8.000+ usuarios' },
          ', infraestructura con ',
          { kw: 'Docker' },
          ' y despliegue en ',
          { kw: 'Azure' },
          '.',
        ],
        highlights: [
          [
            '— Documentó el ',
            { kw: '100%' },
            ' de contratos de API, reduciendo ambigüedad entre equipos',
          ],
          [
            '— Participó en desarrollo, infraestructura y documentación técnica',
          ],
        ],
      },
      {
        roleTitle: 'Desarrollador Backend',
        companyLine: 'Altiva Tech — Salvador, BA · ene 2024 – Actual',
        intro: [
          'Evolución de sistema legado en entorno ágil con ',
          { kw: 'sprints de 2 semanas' },
          '.',
        ],
        highlights: [
          [
            '— Entregó de forma constante ',
            { kw: '3–4 tareas por sprint' },
            ', por encima del promedio',
          ],
          [
            '— Apoyó integraciones ',
            { kw: 'React' },
            ' del frontend, reduciendo dependencias entre squads',
          ],
        ],
      },
    ],
    education: {
      degree: 'Grado en Ciencias de la Computación',
      detail: 'Universidad Federal de Bahia — Salvador, BA · 2019–2023',
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
