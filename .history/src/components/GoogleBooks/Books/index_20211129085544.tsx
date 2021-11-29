import React from 'react'
import { BsBookType } from '../../Bookstore/Book'
import Book , { BookType }from '../Book'
import './books.css'

export interface BooksProps {
  books?: BookType[],
  bookBS?: BsBookType[]
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className="books">
      {books?.map(book => <Book key={book.id} book={book} />)} 
    </div>
  )
}

export default Books
