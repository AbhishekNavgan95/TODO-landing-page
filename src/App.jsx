import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes className='font-roboto'>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App