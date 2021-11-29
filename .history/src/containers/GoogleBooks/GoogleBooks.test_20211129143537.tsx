import React from 'react'
import { render, screen } from '@testing-library/react'
import GoogleBooks from '.'
import axiosMock from 'axios'
const mockedAxios = axiosMock as jest.Mocked<typeof axiosMock>;


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

test('GoogleBooks: Should show books', async () => {
  const books = { items: [book] }
  const response = { data: books }
  mockedAxios.get.mockResolvedValue(response)
  render(<GoogleBooks />)

  const bookTitle = await screen.findByText(/javascript/i)
  const pageTitle = screen.getByText(/google books/i)
  expect(bookTitle).toBeInTheDocument()
  expect(pageTitle).toBeInTheDocument()
})