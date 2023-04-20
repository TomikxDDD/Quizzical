import { useState, useEffect } from "react";
import {nanoid} from "nanoid"

import Question from "./Question.jsx";

function QuestionsScreen(){

  const [data, setData] = useState();
  
  const [newQuestions, setNewQuestions] = useState(true)

  const [questions, setQuestions] = useState([])

  const handleClick = () => {
    setNewQuestions(true)
  }

  /* Calling open trivia database API */
  useEffect(() => {
    if (newQuestions){
      fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setData(data))
    }
    setNewQuestions(false)
  }, [newQuestions])

  useEffect(() => {
    if(data){
      setQuestions(data.results.map(qData => {
        let id = nanoid()
        return <Question key={id} questionData={qData}/>
      }))
  }
  }, [data])

  return(
    <>
      <main className="question-screen-container">
        <h2 className="question-screen-heading"> Test your skills </h2>
        {questions && questions} 
      </main>
      <button type="button" className="btn btn-check-answers" onClick={handleClick}> New questions </button>
    </>
  )
}

export default QuestionsScreen