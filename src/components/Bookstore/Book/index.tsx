import React from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import './book.css'

export type BsBookType = {
  ID: string
  title: string
  author: string
  content_short: string
  thumbnail: string
}

export interface BsBookProps {
  book: BsBookType
}


const BsBook = ({ book }: BsBookProps) => {
  const [favs, setFavs] = useLocalStorage("favs", [{}])

  //const [comments, setComments] = useLocalStorage("comments", [{}])

  const addFav = (ID: String, title: String) => {
    const newFav = {
      id: ID,
      title: title
    };
    setFavs([...favs, newFav]);
  }

  return (
    <div className="book">
      <div className="book-image">
        {book.thumbnail ? <img
          alt={book.title}
          src={book.thumbnail} />
          : <img src="https://picsum.photos/200/260" alt="default" />}
      </div>
      <p className="book-title">{book.title}</p>
      <button onClick={() => addFav(book.ID, book.title)}>Agregar a favs</button>
    </div>
  )
}

export default BsBook