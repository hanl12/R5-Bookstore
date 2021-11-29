import React, { ChangeEvent, useState } from 'react'
import './SearchInput.css'

interface SearchInputProps {
    setSearch: Function
}

const SearchInputBS = ({ setSearch }: SearchInputProps) => {
    const [searchValue, setSearchValue] = useState('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value)
    }

    return (
        <div className="search">
            <h1>BOOKSTORE</h1>
            <input type="text" className="search-input" placeholder="Buscar un libro" value={searchValue} onChange={handleInputChange} />
            <button className="search-button" onClick={() => setSearch(searchValue)}>Buscar</button>
        </div>
    )
}

export default SearchInputBS