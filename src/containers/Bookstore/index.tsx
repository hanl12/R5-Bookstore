import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
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
            <SearchInputBS setResponse={setResponse} />
            {response?.data ? <BsBooks books={response.data} /> : <Spinner style={{position: 'absolute', top: '50%', left: '50%'}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </div>
    )
}

export default Bookstore