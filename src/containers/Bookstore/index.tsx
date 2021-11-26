import React, { useState } from 'react'
import SearchInputBS from '../../components/Bookstore/SearchInputBS'

interface Response {
    data?: {
        docs: any
    }
}

const Bookstore = () => {
    const [response, setResponse] = useState<Response>()
    return (
        <div>
            <SearchInputBS setResponse= {setResponse} response= {response} />
        </div>
    )
}

export default Bookstore