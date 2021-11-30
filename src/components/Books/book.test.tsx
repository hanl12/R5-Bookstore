import { render, screen } from '@testing-library/react'
import React from 'react'
import Book from '../GoogleBooks/Book'


const book = {
    id: 'SqikDwAAQBAJ',
    volumeInfo: {
      title: 'JavaScript - Aprende a programar en el lenguaje de la web',
      authors: ["Fernando Luna"],
      publishedDate: "2019-07-23",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
    }
  }

describe('<Book />', () => {
    beforeEach(() => {
        render(
            <Book book={book} />
        )
    })

    test('Book: Book title must be shown', async () => {
        const bookTitle = await screen.findByText(/javascript/i)
        expect(bookTitle).toBeInTheDocument()
    })
    
})
