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
    { id: "projects", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contacto" },
  ]

  export const icons = [
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "TypeScript", icon: typescript },
    { name: "Next.js", icon: next },
    { name: "GraphQL", icon: graphql },
    { name: "Tailwind", icon: tailwind },
    { name: "Zustand/Redux", icon: global },
    { name: "MongoDb,mySQL", icon: database },
  ]

  export const projects = [
    {
      title: "Plataformas e-commerce  (carrefour,tokin,bgh,tecno,petba)",
      description:
        "Aplicación de soluciones mediante VTEX IO,agregado de nuevas funcionalidades mediante custom apps y refactor de diseño.(Repositorios privados)",
      image: [carrefour,bgh,tecno,tokin],
      tech: ["React", "Node.js", "VTEX IO", "Graphql"],
      link: ""
    },
    {
      title: "Unsplash images collections",
      description:
        "Buscador de imagenes y manejo de colecciones con la  API unsplash images",
      image: unsplash,
      tech: ["TypeScript", "Next js", "Tailwind", "Zustand","MongoDB","Vitest"],
      link: "https://unsplash-collections-iota.vercel.app/"
    },
    {
      title: "Dashboard para sistema de gestión (App privada)",
      description:
        "Sistema de gestión diseñado especificamente para una herreria con manejo de asientos contables,gastos/ingresos y aumatizacion para creacion de presupuestos",
      image: dashboard,
      tech: ["Next js", "Prisma", "MySQL", "Tailwind","jws"],
      link: ""
    },
    {
      title: "Snippets share",
      description:
        "App para guardar y compartir piezas de codigo en diferente lenguajes",
      image: snippets,
      tech: ["Next js", "Tailwind", "Zustand", "Neon db serverless"],
      link: "https://snippets-share.vercel.app/"
    },
  ]