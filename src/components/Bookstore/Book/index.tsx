import React from 'react'
import { Modal, Button as Btn, Form } from 'react-bootstrap';
import useLocalStorage from '../../../hooks/useLocalStorage'
import './book.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillHeart } from 'react-icons/ai'


export type BsBookType = {
  ID: string
  title: string
  author: string
  content_short: string
  thumbnail: string
  isFav: boolean
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
        <Form className="formFlex">
          <Form.Label htmlFor="com">Agregar comentario:</Form.Label>
          <Form.Control type="text" />
          <Btn>+</Btn>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// onClick={props.addFav(props.book.ID, props.book.title)}

const BsBook = ({ book }: BsBookProps) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [favs, setFavs] = useLocalStorage("favs", [{}])

  const [comments, setComments] = useLocalStorage("comments", [{}])

  const addFav = (ID: String, title: String) => {
    const newFav = {
      id: ID,
      title: title
    };
    setFavs([...favs, newFav]);
  }

  const removeFav = (ID: String) => {
    const newFavs = favs.filter((t: any) => t.id !== ID)
    setFavs(newFavs)
  }

  const addComment = (ID: String, comment: String) => {
    const newComment = {
      id: ID,
      comment: comment
    };
    setComments([...comments, newComment]);
  }

  const handleClic = () => {
    addFav(book.ID, book.title)
  }

  return (
    <>
      {book.isFav = favs.filter(function (t:any) { return (t.id === book.ID) }).length>0}
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
        removeFav={removeFav}
      />
    </>
  )
}

export default BsBook