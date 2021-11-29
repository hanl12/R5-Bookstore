import axios from 'axios'
import React, { useState } from 'react'
import { BookType } from '../../components/GoogleBooks/Book'
import Books from '../../components/Books'
import SearchInput from '../../components/SearchInput'
import { Link } from 'react-router-dom'
import { Button as Btn } from 'react-bootstrap';

interface Response {
    data?: {
        items: BookType[]
    }
}

const GoogleBooks = () => {
    const [response, setResponse] = useState<Response>({});
    const [search, setSearch] = useState('javascript');

    async function getBooks(title: string = 'javascript') {
        setResponse({});
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
          .then((response) => setResponse(response)).catch()
      }
    
      React.useEffect(() => {
        getBooks(search)
      }, [search])

    return (
        <div>
            <Link to="/bookstore"><Btn>Ir a GoogleBooks</Btn></Link>
            <SearchInput setSearch={setSearch}  title={"GOOGLE BOOKS"}/>
            {response.data && <Books books={response.data.items} />}
        </div>
    )
}

export default GoogleBooks
