import React from 'react'
import BookList from './BookList'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/add" element={<Register />} exact />
      </Routes>
    </div>
  )
}

export default App