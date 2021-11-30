import { render, screen } from '@testing-library/react'
import React from 'react'
import BsBook from '.'


const book = {
    ID: '12345',
    title: 'JavaScript Notes for Professional',
    author: 'Varios',
    thumbnail: 'https://olcovers2.blob.core.windows.net/coverswp/2018/05/JavaScriptNotesForProfessionals-Openlibra-110x153.png',
    content_short: 'This JavaScript Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. ',
    isFav: true,
    comment: 'Nice book'
}

describe('<Book />', () => {
    beforeEach(() => {
        render(
            <BsBook book={book} />
        )
    })

    test('Book: Book title must be shown', async () => {
        const bookTitle = await screen.findByText(/javascript/i)
        expect(bookTitle).toBeInTheDocument()
    })
    
    test('Book: Fav button must be red, cuz this book is Fav', () => {
        const favIcon = document.getElementById('fav-icon')
        // console.log(favIcon);
        
        expect(favIcon).toHaveStyle('color: red');
    })
    
})
