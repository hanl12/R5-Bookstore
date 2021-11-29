import React from 'react'
import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import SearchInput from '.'
import axiosMock from 'axios';
const mockedAxios = axiosMock as jest.Mocked<typeof axiosMock>;

const book = {
  id: 'SqikDwAAQBAJ',
  volumeInfo: {
    title: 'JavaScript - Aprende a programar en el lenguaje de la web',
    authors: ["Fernando Luna"],
    publishedDate: "2019-07-23",
    imageLinks: {
      "smallThumbnail": "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
  }
}

describe('<SearchInput />', () => {
  const setSearch = jest.fn()
  const title = "java"

  beforeEach(() => {
    render(<SearchInput setSearch={setSearch} title={title} />)
  })
  
  test('SearchInput: Title must be shown', async () => {
    const pageTitle = await screen.findByText(/java/i)

    expect(pageTitle).toBeInTheDocument()
  })
})