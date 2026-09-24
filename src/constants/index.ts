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
