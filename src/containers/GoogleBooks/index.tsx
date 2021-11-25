import React, { useState } from 'react'
import { BookType } from '../../components/GoogleBooks/Book'
import Books from '../../components/GoogleBooks/Books'
import SearchInput from '../../components/GoogleBooks/SearchInput'

interface Response {
    data?: {
        items: BookType[]
    }
}

const GoogleBooks = () => {
    const [response, setResponse] = useState<Response>({});

    return (
        <div>
            <SearchInput setResponse={setResponse} />
            {response.data && <Books books={response.data.items} />}
        </div>
    )
}

export default GoogleBooks
