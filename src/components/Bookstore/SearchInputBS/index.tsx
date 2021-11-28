import React, { ChangeEvent, useState, useEffect } from 'react'
import axios from 'axios'
import './SearchInput.css'

interface SearchInputProps {
    setResponse: Function
}

const SearchInputBS = ({ setResponse }: SearchInputProps) => {
    const [searchValue, setSearchValue] = useState('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value)
    }

    function getBooks(title: string = 'javascript') {
        axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${title}`).then((response) => setResponse(response))
    }

    useEffect(() => {
        getBooks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="search">
            <h1>LIBRA BOOKS</h1>
            <input type="text" className="search-input" placeholder="Buscar un libro" value={searchValue} onChange={handleInputChange} />
            <button className="search-button" onClick={() => getBooks(searchValue)}>Buscar</button>
        </div>
    )
}

export default SearchInputBS