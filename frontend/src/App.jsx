import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Survey from './pages/survey/Survey'
import Form from './pages/form/Form'
import ThanksPage from './pages/thanks/ThanksPage'

const App = () => {
  return ( 
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/form' element={<Form />} />
       <Route path='/questions' element={<Survey/>} />
       <Route path='/complete' element={<ThanksPage/>} />
    </Routes>
  )
}

export default App