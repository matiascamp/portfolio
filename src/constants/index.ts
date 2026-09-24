import global from '../assets/global.svg'
import graphql from '../assets/graphql.svg'
import next from '../assets/next.svg'
import node from '../assets/node.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import database from '../assets/database.svg'
import carrefour from "../assets/carrefour.png"
import tokin from "../assets/tokin.png"
import bgh from "../assets/bgh.png"
import tecno from "../assets/tecno.png"
import unsplash from "../assets/unsplash.png"
import dashboard from "../assets/dashboard.png"
import snippets from "../assets/snippets.png"

export const sections = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Formación" },
    { id: "projects", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contacto" },
  ]

  export const icons = [
    { name: "React", icon: react, group: "Experiencia profesional" },
    { name: "Node.js", icon: node, group: "Experiencia profesional" },
    { name: "VTEX IO", icon: global, group: "Experiencia profesional" },
    { name: "VTEX Master Data", icon: database, group: "Experiencia profesional" },
    { name: "GraphQL", icon: graphql, group: "Experiencia profesional" },
    { name: "jQuery", icon: global, group: "Experiencia profesional" },
    { name: "TypeScript", icon: typescript, group: "Proyectos y formación" },
    { name: "Next.js", icon: next, group: "Proyectos y formación" },
    { name: "Tailwind", icon: tailwind, group: "Proyectos y formación" },
    { name: "Zustand / Redux", icon: global, group: "Proyectos y formación" },
    { name: "MongoDB / MySQL", icon: database, group: "Proyectos y formación" },
  ]

export const englishSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Tech stack" },
  { id: "contact", label: "Contact" },
]

  export const projects = [
    {
      title: "Plataformas e-commerce",
      description:
        "Proyecto profesional de evolución continua para tiendas e-commerce de Carrefour, Tokin, BGH, BGH Tecno y Petba. Participé en el desarrollo de nuevas funcionalidades y reworks para distintas áreas de las tiendas, con foco principalmente frontend y repositorios privados.",
      caseStudy: true,
      featured: true,
      details: [
        "Desarrollo de la sección de comentarios y reviews, incluyendo la creación de tablas y entidades en VTEX Master Data y su gestión desde Mi Cuenta.",
        "Implementación de autorización de terceros para realizar compras y desarrollo de custom apps para banners y contenido promocional.",
        "Modificación y personalización de sliders, landings y otras secciones de las tiendas según los requerimientos de cada cliente.",
        "Resolución de funcionalidades complejas mediante soluciones backend con Node.js cuando requerían múltiples conexiones o llamadas; aproximadamente el 80% de las implementaciones se resolvía en frontend.",
        "Las funcionalidades se implementaban directamente en producción dentro de la página principal y otras áreas de cada tienda, respetando la arquitectura y las capacidades de VTEX."
      ],
      image: [carrefour,bgh,tecno,tokin],
      tech: ["React", "Node.js", "VTEX IO", "GraphQL"],
      link: ""
    },
    {
      title: "Unsplash Image Collections",
      description:
        "Aplicación web para buscar imágenes en Unsplash, guardarlas y organizarlas en colecciones personalizadas. Incluye consumo de API externa, manejo de estado global, persistencia de datos y una interfaz responsive.",
      image: unsplash,
      tech: ["TypeScript", "Next.js", "Tailwind", "Zustand", "MongoDB", "Vitest"],
      link: "https://unsplash-collections-iota.vercel.app/"
    },
    {
      title: "Dashboard de gestión",
      description:
        "Dashboard privado desarrollado para una herrería, orientado a centralizar la gestión de asientos contables, ingresos y gastos. También automatiza la creación de presupuestos para agilizar las tareas administrativas del negocio.",
      image: dashboard,
      tech: ["Next.js", "Prisma", "MySQL", "Tailwind", "JWT"],
      link: ""
    },
    {
      title: "Snippets Share",
      description:
        "Plataforma para guardar, organizar y compartir fragmentos de código en distintos lenguajes de programación. Permite centralizar recursos reutilizables y acceder a ellos desde una interfaz simple y responsive.",
      image: snippets,
      tech: ["Next.js", "Tailwind", "Zustand", "Neon Serverless Postgres"],
      link: "https://snippets-share.vercel.app/"
    },
  ]

export const englishProjects = [
  {
    ...projects[0],
    title: "E-commerce platforms",
    description: "Ongoing professional work evolving e-commerce stores for Carrefour, Tokin, BGH, BGH Tecno, and Petba. I contributed new features and redesigns across different areas of the stores, focusing mainly on frontend work in private repositories.",
    details: [
      "Developed the comments and reviews section, including creating tables and entities in VTEX Master Data and managing them through My Account.",
      "Implemented third-party purchase authorization and built custom apps for banners and promotional content.",
      "Updated and customized sliders, landing pages, and other store sections to meet each client's requirements.",
      "Solved complex features with Node.js backend solutions when they required multiple connections or calls; around 80% of implementations were handled on the frontend.",
      "Features were deployed directly to production across each store's homepage and other areas, following VTEX architecture and capabilities."
    ]
  },
  {
    ...projects[1],
    description: "A web app for searching Unsplash images, saving them, and organizing them into custom collections. It integrates an external API and includes global state management, data persistence, and a responsive interface."
  },
  {
    ...projects[2],
    title: "Management dashboard",
    description: "A private dashboard built for a metalworking business to centralize accounting entries, income, and expenses. It also automates quote creation to streamline administrative work."
  },
  {
    ...projects[3],
    description: "A platform for saving, organizing, and sharing code snippets in multiple programming languages. It centralizes reusable resources in a simple, responsive interface."
  }
]
