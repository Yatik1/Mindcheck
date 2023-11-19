import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./style.scss"


const Survey = () => {

  const [question , setQuestion] = useState([])
  const [id,setId] = useState(0)
  const [selected , setSelected] = useState(false)
  const [response , setResponse] = useState(null)
   
  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await fetch('question.json')
         const data = await response.json()
         setQuestion(data)
         console.log(data)
       }
       catch (err) {
        console.log('Error fetching Data : ' , err)
       }
    }
    fetchData();
  } , [])
  
  const nextClick = ({id }) => {
    setId(prev => prev+1)
    setSelected(false) 

    const questionNumber = id+1

    const data = {
      questionNumber , 
      response,
    };

    axios 
       .post('https://mindcheck-server.vercel.app/questions' , data)
       .then(() => {
         console.log('response has been added successfully')
       })
       .catch((err)=> {
        console.log(err)
       })
  } 

  const prevClick = () => {
    setId(prev => prev-1)
    setSelected(false)
    setResponse(null)
  }

  const optionSelected = ( {id ,option}) => {
     setSelected(true)
     setResponse(option)
  }

   if (!question || question.length == 0) {
     return <div>Loading ..... </div>
   } 
 
  if (id > question.length-1) {
      return  <h1>Thanks you for participating .... </h1>
  }

  const questionId = question[id]

  return (

    <section key={id}>
        <h2 className='question' key={questionId.id}> <span>{questionId.id}. </span> {questionId.question} </h2>
       
        <ul className='options'>
          {questionId.options?.map((option , optionIndex) => (
            <li className='option' key={optionIndex} onClick={() => optionSelected({id ,option})}>{option}</li>
          ))}  
        </ul>

        <div className="buttons">
           <button className={`${id === 0 ? 'nobutton' : 'white' }`} onClick={() => prevClick(setResponse)}>Back</button>
           <button className='coloured' onClick={() => nextClick({id})} disabled={!selected}>{`${id === question.length-1 ? "Submit" : "Next"}`}</button>
        </div>   
 
    </section>
   
  )
}

export default Survey