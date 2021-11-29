import React from 'react'
export type DefaultBookProps = {
    title: string,
    imgSrc?: string,
}

const DefaultBook = ({title, imgSrc}: DefaultBookProps) => {
    return(
        <div className="book">
          <div className="book-image">
            {imgSrc ? <img
              alt={title}
              src={imgSrc} />
              : <img src="https://picsum.photos/200/260" alt="default" />}
          </div>
          <p className="book-title">{title}</p>
        </div>
      )
}

export default DefaultBook
