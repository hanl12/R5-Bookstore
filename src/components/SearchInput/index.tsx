import React, { ChangeEvent } from 'react'
import './SearchInput.css'

interface searchProps {
  setSearch: Function,
  title: string
}

const SearchInput = ({setSearch, title}: searchProps) => {
  const [searchValue, setSearchValue] = React.useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  return (
    <div className="search">
      <h1>{title}</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar un libro"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={() => setSearch(searchValue)}>Buscar</button>
    </div>
  )
}

export default SearchInput
