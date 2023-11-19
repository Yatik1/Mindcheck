import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Survey from './pages/survey/Survey'

const App = () => {
  return ( 
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/questions' element={<Survey/>} />
    </Routes>
  )
}

export default App