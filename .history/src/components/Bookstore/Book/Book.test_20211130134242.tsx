import { render, screen } from '@testing-library/react';
import Book from './index';

const book = {
    ID: '123',
    title: 'Javascript',
    author: 'Varios',
    content_short: 'This is a simple content',
    thumbnail: 'https://olcovers2.blob.core.windows.net/coverswp/2018/05/JavaScriptNotesForProfessionals-Openlibra-110x153.png',
    isFav: true,
    comment: 'This is a good Book'
}

describe('<Book />', () => {
    beforeAll(() => {
        render(<Book book={book} />)
    })

    test('Book: Book must be shown', async () => {
        const bookTitle = await screen.findByText(/javascript/i)
        expect(bookTitle).toBeInTheDocument()
    })

    // test('Book: Fav button must be checked', async () => {
    //     const el = screen.getByTestId('icon');
    //     // expect(el).toHaveStyle('color: red')
    // })
})


