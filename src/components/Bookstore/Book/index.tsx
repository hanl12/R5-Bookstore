import React from 'react'
import './book.css'

export type BookSType = {
  ID: string
  title: string
  author: string
  content_short: string
  thumbnail: string
}

export interface BookSProps {
  book: BookSType
}

const BookSt = ({ book }: BookSProps) => (
  <div className="book">
    <div className="book-image">
      {book.thumbnail ? <img
        alt={book.title}
        src={book.thumbnail} />
        : <img src="https://picsum.photos/200/260" alt="default" />}
    </div>
    <p className="book-title">{book.title}</p>
  </div>
)

export default BookSt
