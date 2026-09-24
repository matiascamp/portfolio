import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import Portfolio from "./App"

describe("Portfolio", () => {
  it("renders the main sections and section navigation", () => {
    render(<Portfolio />)

    expect(screen.getByRole("heading", { level: 1, name: /Matias Campodonico/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Experiencia laboral" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Proyectos" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Stack" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Contacto" })).toBeInTheDocument()
    expect(screen.getByRole("navigation", { name: "Navegación principal" })).toBeInTheDocument()
  })

  it("scrolls to a section when its navigation button is selected", async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole("button", { name: "Proyectos" }))

    expect(document.getElementById("projects")?.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })
  })

  it("exposes direct contact links", () => {
    render(<Portfolio />)

    expect(screen.getByRole("link", { name: /Enviar email a campodonicomatias@outlook.com/ }))
      .toHaveAttribute("href", "mailto:campodonicomatias@outlook.com")
    expect(screen.getByRole("link", { name: /perfil de GitHub/i }))
      .toHaveAttribute("href", "https://github.com/matiascamp")
  })
})
