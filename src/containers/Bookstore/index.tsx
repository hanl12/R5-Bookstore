import React, { useState } from 'react'
import { BsBookType } from '../../components/Bookstore/Book'
import BooksST from '../../components/Bookstore/Books'
import SearchInputBS from '../../components/Bookstore/SearchInputBS'

interface Response {
    data?: BsBookType[]
}

const Bookstore = () => {
    const [response, setResponse] = useState<Response>()
    return (
        <div>
            <SearchInputBS setResponse= {setResponse} />
            {response?.data && <BooksST books={response.data} />}
        </div>
    )
}

export default Bookstore