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
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Formación" },
    { id: "projects", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contacto" },
  ]

  export const icons = [
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "TypeScript", icon: typescript },
    { name: "Next.js", icon: next },
    { name: "VTEX IO", icon: global },
    { name: "VTEX Master Data", icon: database },
    { name: "GraphQL", icon: graphql },
    { name: "jQuery", icon: global },
    { name: "Tailwind", icon: tailwind },
    { name: "Zustand / Redux", icon: global },
    { name: "MongoDB / MySQL", icon: database },
  ]

  export const projects = [
    {
      title: "Plataformas e-commerce",
      description:
        "Participación en el desarrollo de tiendas para Carrefour, Tokin, BGH, BGH Tecno y Petba. Implementé nuevas funcionalidades de e-commerce, custom apps, integraciones con GraphQL, mejoras de checkout y refactors de diseño en VTEX IO. Proyecto profesional con repositorios privados.",
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
