import React, { ChangeEvent, useState, useEffect } from 'react'
import axios from 'axios'
import './SearchInput.css'

interface SearchInputProps {
    response: any
    setResponse: Function
}

const SearchInputBS = ({ response, setResponse }: SearchInputProps) => {
    const [searchValue, setSearchValue] = useState('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value)
    }

    function getBooks(title: string = 'javascript') {
        axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${title}`).then((response) => setResponse(response))
    }

    function handleClicTest() {
        getBooks(searchValue)
        test()
    }

    const test = async() => {
        console.log(response)
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div className="search">
            <h1>OPEN LIBRARY BOOKS</h1>
            <input type="text" className="search-input" placeholder="Buscar un libro" value={searchValue} onChange={handleInputChange} />
            <button className="search-button" onClick={() => handleClicTest()}>Buscar</button>
        </div>
    )
}

export default SearchInputBS