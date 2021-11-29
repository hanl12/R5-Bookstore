import axios from 'axios'
import React, { useState } from 'react'
import { BookType } from '../../components/GoogleBooks/Book'
import Books from '../../components/GoogleBooks/Books'
import SearchInput from '../../components/SearchInput'

interface Response {
    data?: {
        items: BookType[]
    }
}

const GoogleBooks = () => {
    const [response, setResponse] = useState<Response>({});
    const [search, setSearch] = useState('javascript');

    function getBooks(title: string = 'javascript') {
        setResponse({});
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
          .then((response) => setResponse(response))
      }
    
      React.useEffect(() => {
        getBooks(search)
      }, [search])

    return (
        <div>
            <SearchInput setSearch={setSearch}  title={"GOOGLE BOOKS"}/>
            {response.data && <Books books={response.data.items} />}
        </div>
    )
}

export default GoogleBooks
