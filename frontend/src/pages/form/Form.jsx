import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {

  const [fullName , setFullName] = useState("") 
  const [semester , setSemester] = useState("") 

  const navigate = useNavigate();

  const handleForm = async (e) => {
      e.preventDefault()

      if (!fullName || !semester) {
        toast.warn('Enter All the required fields', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      
        return;
      }

      try {
        await axios
          .post("https://mindcheck-server.vercel.app/form" , {
            fullName,
            semester
          })          

          navigate('/questions');

          toast.success('Form submitted successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            })

      } catch (error) {
        console.log("Signup error : " , error)

        toast.error('Error occurred while submitting form', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });

      }
  }
  
  return (

    <form className="page" >
      <div className="cover">
       <h1>MINDCHECK</h1>
       <input type="text" 
              placeholder="Enter your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required />

       <input type="text" 
              placeholder="Enter your Semester" 
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required />

       <div className="btn" onClick={handleForm}>Let's Get Started</div>
       <ToastContainer />
     </div>
    </form>
  )
}

export default Form
