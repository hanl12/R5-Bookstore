import React, { useEffect, useState } from 'react'
import { Spinner, Button as Btn } from 'react-bootstrap'
import axios from 'axios';
import SearchInput from '../../components/SearchInput';
import Books from '../../components/Books';

interface Response {
    data?: [{
        ID: string
        title: string
        author: string
        content_short: string
        thumbnail: string
        isFav: boolean
        comment: String
    }]
}

const Bookstore = () => {
    const [response, setResponse] = useState<Response>()
    const [search, setSearch] = useState('javascript');

    function getBooks(title: string) {
        setResponse({});
        axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${title}`).then((response) => setResponse(response))
    }

    useEffect(() => {
        getBooks(search);
    }, [search])

    return (
        <div>
            <Btn>Ir a GoogleBooks</Btn>
            <SearchInput setSearch={setSearch} title={"BOOKSTORE"}/>
            {response?.data ? <Books booksBS={response.data} /> : <Spinner style={{ position: 'absolute', top: '50%', left: '50%' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </div>
    )
}

export default Bookstore