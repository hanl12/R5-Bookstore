import React from 'react'
import { BsBookType } from '../../Bookstore/Book'
import BsBooks from '../../Bookstore/Books'
import Book , { BookType }from '../Book'
import './books.css'

export interface BooksProps {
  books?: BookType[],
  bookBS?: BsBookType[]
}

const Books = ({ books, bookBS }: BooksProps) => {
  return (
    <div className="books">
      {books?.map(book => <Book key={book.id} book={book} />)}
      {bookBS?.map(book => <BsBooks key={book.ID} book={book} />)} 
    </div>
  )
}

export default Books
