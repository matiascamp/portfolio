import { useState, type FormEvent } from "react"

const CharacterSearch = () => {
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearched(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputChar">Buscador de personajes</label>
      <input
        id="inputChar"
        name="character"
        type="search"
        autoComplete="off"
        placeholder="Busca un personaje…"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setSearched(false)
        }}
      />
      <button type="submit" disabled={!query.trim()}>
        Buscar
      </button>
      {searched && <p role="status">No hay resultados para “{query}”.</p>}
    </form>
  )
}

export default CharacterSearch
