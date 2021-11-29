import React from 'react'
import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import SearchInput from '.'
import axiosMock from 'axios';

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