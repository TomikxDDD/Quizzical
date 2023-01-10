import React from "react";

import Question from "./Question.jsx"

export default function QuestionsScreen(props){

  const [checkAnswers, setCheckAnswers] = React.useState(false)

  const [questionData, setQuestionData] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuestionData(data.results))
  }, [checkAnswers])

  console.log(questionData)

  const questions = questionData.map(qData => {
    return <Question questionData={qData}/>
  })


  return(
    <main className="question-screen-container">
      {questions} 
    </main>

  )
}