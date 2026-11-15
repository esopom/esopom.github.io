/* =========================================================
   CONTENIDO DEL PORTFOLIO
   Edita SOLO este archivo para actualizar tu información.
   Fuentes: LinkedIn (perfil, experiencia, formación,
   certificaciones) y GitHub (github.com/esopom).
   ========================================================= */

const PROFILE = {
  name: "Adrián Tomás",
  role: "Desarrollador Salesforce",
  tagline: "Desarrollo y configuro soluciones en Salesforce con Apex y Lightning, con base en Java y Python y un interés constante por la ciberseguridad.",
  location: "Murcia, España",
  available: false, // true = muestra "Disponible para nuevos proyectos"
  about: [
    "Soy Desarrollador Salesforce Junior en Hefame, donde trabajo desde 2025: primero en prácticas y ahora a jornada completa, en modalidad híbrida.",
    "Vengo del lado del desarrollo (Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, con Java y Python), y la certificación de Administrator me ha enseñado que entender bien la plataforma cambia la forma de plantear las soluciones: muchas veces la mejor respuesta no es escribir código, sino configurar bien.",
    "Fuera del trabajo me interesa la ciberseguridad y las redes, y hago proyectos propios que puedes ver más abajo.",
  ],
  links: {
    email: "adritombar@gmail.com",
    linkedin: "https://www.linkedin.com/in/adri%C3%A1n-tom%C3%A1s-51b37b303/",
    github: "https://github.com/esopom",
    trailhead: "https://www.salesforce.com/trailblazer/qxwny2uxqjgpcvngkt",
  },
  cv: "", // ruta a tu CV, p. ej. "assets/cv.pdf" (vacío = se oculta el botón)
};

const SKILLS = [
  { group: "Salesforce", items: ["Apex", "Salesforce Lightning", "Administración de Salesforce", "Flows", "Modelo de datos", "Seguridad y visibilidad de registros"] },
  { group: "Lenguajes", items: ["Java", "Python", "JavaScript", "HTML / CSS", "Bash"] },
  { group: "Herramientas", items: ["Git & GitHub", "FastAPI", "Linux", "Wireshark / tshark"] },
  { group: "Otras", items: ["Ciberseguridad", "Redes", "Trabajo en equipo", "Resolución de problemas"] },
];

/* ---------- Apartado Salesforce ---------- */
const SALESFORCE = {
  intro: "Trabajo cada día con la plataforma: desarrollo en Apex y Lightning, y la configuración declarativa que hay detrás (modelo de datos, seguridad y visibilidad de registros, automatizaciones y gestión de usuarios).",
  profile: PROFILE.links.trailhead,
  stats: [
    { value: "Ranger", label: "Rango en Trailhead" },
    { value: "84.850", label: "Puntos Trailhead" },
    { value: "1", label: "Certificación Salesforce" },
    { value: "jul. 2025", label: "Desarrollador en Hefame desde" },
  ],
  certifications: [
    { name: "Salesforce Certified Platform Administrator", issuer: "Salesforce", date: "ago. 2026", url: "" },
  ],
  project: null, // proyecto destacado (null = se oculta)
};

/* ---------- Proyectos de GitHub ---------- */
const GITHUB = {
  user: "esopom",
  url: "https://github.com/esopom",
  repos: [
    {
      title: "red-monitor",
      description: "Monitor en tiempo real de los dominios que visita cada dispositivo de una red propia, mediante ARP spoofing y análisis de DNS y del SNI de TLS.",
      tags: ["Bash", "Ciberseguridad"],
      repo: "https://github.com/esopom/red-monitor",
      demo: "",
    },
    {
      title: "ConsolaYEjecucionProgramada",
      description: "Planificador de tareas en Java al estilo cron: lee las tareas de un fichero y ejecuta comandos a la hora indicada, con una consola para listarlas y cancelarlas.",
      tags: ["Java"],
      repo: "https://github.com/esopom/ConsolaYEjecucionProgramada",
      demo: "",
    },
    {
      title: "ProyectoFinalFastAPI",
      description: "API REST de un catálogo de portátiles con FastAPI: rutas separadas, modelos de datos y tests automáticos.",
      tags: ["Python", "FastAPI"],
      repo: "https://github.com/esopom/ProyectoFinalFastAPI",
      demo: "",
    },
    {
      title: "PrimeraEntregaFastAPI",
      description: "API REST sobre un listado de coches de segunda mano, con sus endpoints y peticiones de prueba.",
      tags: ["Python", "FastAPI"],
      repo: "https://github.com/esopom/PrimeraEntregaFastAPI",
      demo: "",
    },
    {
      title: "Black-Jack",
      description: "Juego de Blackjack por consola en Java, organizado en clases para las cartas, los jugadores y la partida.",
      tags: ["Java"],
      repo: "https://github.com/esopom/Black-Jack",
      demo: "",
    },
    {
      title: "Pokemon_Snake",
      description: "El clásico Snake con temática Pokémon, programado en Python.",
      tags: ["Python"],
      repo: "https://github.com/esopom/Pokemon_Snake",
      demo: "",
    },
  ],
};

const EXPERIENCE = [
  {
    period: "jul. 2025 — Actualidad",
    title: "Desarrollador Salesforce Junior",
    org: "Hefame",
    description: "Jornada completa, híbrido · Murcia. Desarrollo sobre Salesforce.",
  },
  {
    period: "mar. 2025 — jun. 2025",
    title: "Estudiante en prácticas",
    org: "Hefame",
    description: "Santomera, Murcia. Desarrollo y administración de Salesforce con Apex y Lightning.",
  },
];

const EDUCATION = [
  {
    period: "2023 — 2025",
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    org: "IES Ingeniero de la Cierva",
    description: "Programación con Java y Python.",
  },
  {
    period: "2021 — 2023",
    title: "Bachillerato Tecnológico",
    org: "IES Monte Miravete",
    description: "",
  },
];
