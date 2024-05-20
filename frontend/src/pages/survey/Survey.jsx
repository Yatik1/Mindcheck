import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./style.scss";
import Navbar from '../../components/navbar/Navbar.jsx';
import ThanksPage from '../thanks/ThanksPage.jsx';

const Survey = () => {

  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [selected, setSelected] = useState(false);
  const [response, setResponse] = useState(null);
  const [responses, setResponses] = useState([]); 

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('question.json');
        const data = await response.json();
        setQuestions(data);
        console.log(data);
      } catch (err) {
        console.log('Error fetching Data : ', err);
      }
    };
    fetchData();
  }, []);

  if (!questions || questions.length === 0) {
    return <div>Loading ..... </div>;
  }

  const nextClick = () => {
    const questionNumber = id + 1;

    const updatedResponses = [
      ...responses,
      { questionNumber, response }
    ];

    setResponses(updatedResponses);

    setResponse(null);
    setSelected(false);

    if (id + 1 < questions.length) {
      setId(prev => prev + 1);
    } else {
      axios.post('https://mindcheck-server.vercel.app/questions', { responses: updatedResponses })
        .then(() => {
          console.log('All responses have been added successfully');
          navigate('/thanks'); 
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const prevClick = () => {
    setId(prev => prev - 1);
    setSelected(false);
    setResponse(null);
  };

  const optionSelected = ({ option }) => {
    setSelected(true);
    setResponse(option);
  };



  const questionId = questions[id];

  return (
    <>
      <Navbar />
      <section key={id}>
        <h2 className='question' key={questionId.id}>
          <span>{questionId.id}. </span> {questionId.question}
        </h2>
        <ul className='options'>
          {questionId.options?.map((option, optionIndex) => (
            <li
              className={`option ${response === option ? 'selected' : ''}`}
              key={optionIndex}
              onClick={() => optionSelected({ option })}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button className={`${id === 0 ? 'nobutton' : 'white'}`} onClick={prevClick}>Back</button>
          <button
            className='coloured'
            onClick={nextClick}
            disabled={!selected}
          >
            {`${id === questions.length - 1 ? 'Submit' : 'Next'}`}
          </button>
        </div>
      </section>
    </>
  );
};

export default Survey;
