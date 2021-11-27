import React from 'react'
import { Modal, Button as Btn } from 'react-bootstrap';
import useLocalStorage from '../../../hooks/useLocalStorage'
import './book.css'
import 'bootstrap/dist/css/bootstrap.min.css';


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

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.book.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        {props.book.thumbnail ? <img
          alt={props.book.title}
          src={props.book.thumbnail} />
          : <img src="https://picsum.photos/200/260" alt="default" />}
        <p>
          Autor: {props.book.author}
        </p>
        <p>
          Descripción: {props.book.content_short}
        </p>
      </Modal.Body>
    </Modal>
  );
}


const BsBook = ({ book }: BsBookProps) => {
  const [modalShow, setModalShow] = React.useState(false);
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
    <>
      <div className="book" onClick={() => setModalShow(true)}>
        <div className="book-image">
          {book.thumbnail ? <img
            alt={book.title}
            src={book.thumbnail} />
            : <img src="https://picsum.photos/200/260" alt="default" />}
        </div>
        <p className="book-title">{book.title}</p>
        <button onClick={() => addFav(book.ID, book.title)}>Agregar a favs</button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
      />
    </>
  )
}

export default BsBook