import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useLocalData from '../../../hooks/useLocaData';
import DetailsModal from './DetailsModal';

import './book.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultBook from '../../DefaultBook/DefaultBook';


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

const BsBook = ({ book }: BsBookProps) => {
  const [modalShow, setModalShow] = React.useState(false);

  const useData = useLocalData();

  function loadDetails() {
    book.isFav = useData.favs.filter(function (t: any) { return (t.id === book.ID) }).length > 0
    useData.comments.filter(
      function (t: any) {
        if (t.id === book.ID) {
          book.comment = t.comment;
        }
        return null;
      }
    )
  }

  const handleClic = () => book.isFav ? useData.removeFav(book.ID) : useData.addFav(book.ID, book.title)

  return (
    <>
      {loadDetails()}
      <div>
        <div className="clicArea" onClick={() => setModalShow(true)}>
          <DefaultBook title={book.title} imgSrc={book.thumbnail} />
        </div>
        <span className="fav-span" onClick={handleClic}>
          <AiFillHeart id="fav-icon" className={`fav-icon${book.isFav ? '--red' : ''}`} />
        </span>
      </div>


      <DetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
        addcomment={useData.addComment}
      />
    </>
  )
}

export default BsBook