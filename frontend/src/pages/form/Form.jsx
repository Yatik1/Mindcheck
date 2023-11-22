import React from "react"
import { useNavigate } from 'react-router-dom'

import "./style.css"

function Form() {

    const navigate = useNavigate();

  const handleSurvey = () => {
        navigate('/questions');
  }
  return (
    <div className="page">
    <div className="cover">
      <h1>MINDCHECK</h1>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email Address" />
      <input type="date" className="dob" placeholder="Date of Bith" />
      <input type="text" placeholder="Year" />
      <input type="text" placeholder="Stream" />




      <div className="btn" onClick={handleSurvey}>Let's Get Started</div>
    </div>
    </div>
  )
}

export default Form
