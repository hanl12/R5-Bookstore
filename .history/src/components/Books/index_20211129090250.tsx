import React from 'react'
import BsBook, { BsBookType } from '../Bookstore/Book'
import Book , { BookType }from '../GoogleBooks/Book'
import './books.css'

export interface BooksProps {
  books?: BookType[],
  booksBS?: BsBookType[]
}

const Books = ({ books, booksBS }: BooksProps) => {
  return (
    <div className="books">
      {books?.map(book => <Book key={book.id} book={book} />)}
      {booksBS?.map(book => <BsBook key={book.ID} book={book} />)} 
    </div>
  )
}

export default Books
