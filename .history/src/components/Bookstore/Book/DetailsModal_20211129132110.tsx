import React, { ChangeEvent, useState } from 'react'
import { Modal, Button as Btn, Form, FloatingLabel } from 'react-bootstrap';
import {BsBookType} from './index'

interface modalProps {
  book: BsBookType
  show: any
  onHide: any
  addcomment: Function
}

export default function DetailsModal(props: modalProps) {
    const [comValue, setComValue] = useState('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
      setComValue(event.target.value)
    }

    function handleClic() {
      props.addcomment(props.book.ID, comValue)
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
            <Btn onClick={() => handleClic}>Agregar</Btn>
          </FloatingLabel>}
        </Modal.Body>
      </Modal>
    );
  }