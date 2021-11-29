import React from 'react'
import BookSt, { BsBookType} from '../Bookstore/Book'
import './books.css'

export interface BsBooksProps {
  books: BsBookType[]
}

const BsBooks = ({ books }: BsBooksProps) => {
  return (
    <div className="books">
      {books.map(book => <BookSt key={book.ID} book={book} />)} 
    </div>
  )
}

export default BsBooks
