import React from 'react'
export type DefaultBookProps = {
    title: string,
    imgSrc?: string,
}

const DefaultBook:React.FunctionComponent<DefaultBookProps> = ({title, imgSrc, children}) => {
    return(
        <div className="book">
          <div className="book-image">
            {imgSrc ? <img
              alt={title}
              src={imgSrc} />
              : <img src="https://picsum.photos/200/260" alt="default" />}
          </div>
          <p className="book-title">{title}</p>
          {children}
        </div>
      )
}

export default DefaultBook
