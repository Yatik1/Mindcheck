import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./style.scss"

// import { img } from './assets'

const Home = () => {

  const navigate = useNavigate();

  const handleForm = () => {
        navigate('/form');
  }
  

  return (
    <main>
        <article className="center">
        <div className='navbar'>
             <h1>
               MINDCHECK
             </h1>
          </div>
          <header>
              <div className="content">
                <p>It is normal to feel <br></br>sad, stressed and<br></br>
                  anxious during a crisis.
                </p>
                <div>
                  <button className="homeBtn"  onClick={handleForm}>Let's Start</button>
                </div>
              </div>
              {/* <div className="image">
                   <img src={img} alt='img' />
              </div>
           */}
          </header>
        </article>
    </main>
  )
}

export default Home