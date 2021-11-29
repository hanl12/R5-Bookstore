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

type bokk = {
    id: String,
    title: String,
    thumbnail: String,
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
            <SearchInput setSearch={setSearch}  title={"GOOGLE BOOKS"}/>
            {response.data && <Books books={response.data.items} />}
        </div>
    )
}

export default GoogleBooks
