import React from 'react'
import { render, screen } from '@testing-library/react'
import Bookstore from '.'
import axiosMock from 'axios'
const mockedAxios = axiosMock as jest.Mocked<typeof axiosMock>;

const book = {
  ID: '12345',
  title: 'JavaScript Notes for Professional',
  author: 'Varios',
  thumbnail: 'https://olcovers2.blob.core.windows.net/coverswp/2018/05/JavaScriptNotesForProfessionals-Openlibra-110x153.png',
  content_short: 'This JavaScript Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons ...'
}

test('Bookstore: Should show books', async () => {
  const books = [ book ]
  const response = { data: books }
  mockedAxios.get.mockResolvedValue(response)
  render(<Bookstore />)

  const bookTitle = await screen.findByText(/javascript/i)
  const pageTitle = screen.getByText(/bookstore/i)

  expect(bookTitle).toBeInTheDocument()
  expect(pageTitle).toBeInTheDocument()
})