import React, { ChangeEvent } from 'react'
import './SearchInput.css'

interface searchProps {
  setSearch: Function;
}

const SearchInput = ({setSearch}: searchProps) => {
  const [searchValue, setSearchValue] = React.useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  return (
    <div className="search">
      <h1>GOOGLE BOOKS</h1>
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
