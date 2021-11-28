import React, { ChangeEvent, useState } from 'react'
import { Modal, Button as Btn, Form, FloatingLabel } from 'react-bootstrap';
import './book.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHeart } from 'react-icons/ai'
import useLocalData from '../../../hooks/useLocaData';


export type BsBookType = {
  ID: string
  title: string
  author: string
  content_short: string
  thumbnail: string
  isFav: boolean
  comment: String
}

export interface BsBookProps {
  book: BsBookType
}

function MyVerticallyCenteredModal(props: any) {
  const [comValue, setComValue] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setComValue(event.target.value)
  }
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
        {props.book.comment ? <p>Tu comentario: {props.book.comment}</p> : ''}
        {props.book.comment ? '' : <FloatingLabel controlId="floatingTextarea" label="Comentario" className="mb-3, form-div" >
          <Form.Control as="textarea" placeholder="Leave a comment here" value={comValue} onChange={handleInputChange} />
          <Btn onClick={() => props.addComment(props.book.ID, comValue)}>Agregar</Btn>
        </FloatingLabel>}
      </Modal.Body>
    </Modal>
  );
}

const BsBook = ({ book }: BsBookProps) => {
  const [modalShow, setModalShow] = React.useState(false);

  const data = useLocalData();

  const handleClic = () => {
    data.addFav(book.ID, book.title)
  }

  return (
    <>
      {book.isFav = data.favs.filter(function (t: any) { return (t.id === book.ID) }).length > 0}
      {data.comments.filter(
        function (t: any) {
          if (t.id === book.ID) {
            book.comment = t.comment;
          }
          return null;
        }
      )}
      <div className="book" >
        <div className="book-image" onClick={() => setModalShow(true)}>
          {book.thumbnail ? <img
            alt={book.title}
            src={book.thumbnail} />
            : <img src="https://picsum.photos/200/260" alt="default" />}
        </div>
        <p className="book-title">{book.title}</p>
        <span className="fav-span" onClick={handleClic}>
          <AiFillHeart className={`fav-icon${book.isFav ? '--red' : ''}`} />
        </span>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
        addComment={data.addComment}
      />
    </>
  )
}

export default BsBook