import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleSurvey = () => {
          navigate('/questions');
    }
    


  return (
    <div>
        <h1>Welcome to the survey </h1>
         <h3>Click buton to participate in our survey !!</h3>
        <div>
            <button onClick={handleSurvey}>Start your survey </button>
        </div>
    </div>
  )
}

export default Home
