import React from 'react'
import BookSt, { BookSType } from '../Book'
import './books.css'

export interface BooksSProps {
  books: BookSType[]
}

const BooksST = ({ books }: BooksSProps) => {
  return (
    <div className="books">
      {books.map(book => <BookSt key={book.ID} book={book} />)} 
    </div>
  )
}

export default BooksST
