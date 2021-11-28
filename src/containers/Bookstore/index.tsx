import React, { useState } from 'react'
import { BsBookType } from '../../components/Bookstore/Book'
import BsBooks from '../../components/Bookstore/Books'
import SearchInputBS from '../../components/Bookstore/SearchInputBS'

interface Response {
    data?: BsBookType[]
}

const Bookstore = () => {
    const [response, setResponse] = useState<Response>()
    return (
        <div>
            <SearchInputBS setResponse= {setResponse} />
            {response?.data && <BsBooks books={response.data} />}
        </div>
    )
}

export default Bookstore