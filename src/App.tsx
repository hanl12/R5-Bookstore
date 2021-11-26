import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookstore from './containers/Bookstore'
import GoogleBooks from './containers/GoogleBooks'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleBooks />} />
        <Route path="bookstore" element={<Bookstore />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
