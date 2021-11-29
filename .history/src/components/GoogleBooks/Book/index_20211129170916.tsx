import React from 'react'
import DefaultBook from '../../DefaultBook/DefaultBook'
import './book.css'

export type BookType = {
  id: string
  volumeInfo: {
    title: string
    imageLinks: {
      thumbnail: string
    }
  }
}

export interface BookProps {
  book: BookType
}

const Book = ({ book }: BookProps) => {
  return(
    <DefaultBook title={book.volumeInfo.title} imgSrc={book.volumeInfo.imageLinks?.thumbnail} />
)}

export default Book