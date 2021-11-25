import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoogleBooks from './containers/GoogleBooks'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleBooks />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
