import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
