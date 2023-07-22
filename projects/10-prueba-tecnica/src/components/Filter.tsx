import React, { useState } from 'react'

interface FilterHeaderProps {

  handleClikc: () => void
  sortCountry: () => void
  resetUsers: () => void
  filterUsers: (filter: string) => void
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ handleClikc, sortCountry, resetUsers, filterUsers }) => {
  const [filter, setFilter] = useState('')

  const handleFilter = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    filterUsers(value)
    setFilter(value)
  }
  return (
    <header>
      <h1>Prueba Técnica</h1>
      <div>
        <button onClick={handleClikc}>Colorear</button>
        <button onClick={sortCountry}>Ordenar por pais</button>
        <button onClick={resetUsers}>Resetear estado</button>

      </div>
      <input value={filter} onChange={handleFilter}></input>
    </header>
  )
}

export default FilterHeader
