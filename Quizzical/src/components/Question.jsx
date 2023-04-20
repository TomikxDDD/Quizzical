import { useState, useEffect} from "react"
import {nanoid} from "nanoid"

import AnswerField from "./AnswerField";
import {shuffleArray, decodeTextFromAPI} from "../functions/Functions.js"

function Question({ questionData }){

  const [answers, setAnswers] = useState([]) // React state for storing each answer as an object inside of an array of questions

  const [alreadyShuffled, setAlreadyShuffled] = useState(false)

  const [correctAns, setCorrectAns] = useState('');

  /**
   * Function to select a single answer within one question. 
   * Evaluates, whether the answer is correct or incorrect
   * @param {*} id id of an answer
   */
  function selectAnswer(id){
    let answerCorrect;
    setAnswers(oldAnswers => oldAnswers.map(oldAnswer => {      
      if (id === oldAnswer.id) {
        answerCorrect = (oldAnswer.answerTxt === correctAns)
        return {...oldAnswer,
                correct: answerCorrect,
                selected: true
        }
      } else {
        return {...oldAnswer,
                correct: answerCorrect,
                selected: false}
      }
    }))
  }

  useEffect(() => {
    let correctAnswerTxt = questionData.correct_answer
    setCorrectAns(correctAnswerTxt)
    let incorrectAnswersTxt = questionData.incorrect_answers
    let answersTxt = [...incorrectAnswersTxt, correctAnswerTxt]
    if (!alreadyShuffled){
      answersTxt = shuffleArray(answersTxt)
      setAlreadyShuffled(true)
    }
    let objAnswers = answersTxt.map(ansTxt => {
      return {id:nanoid(),
        answerTxt: ansTxt,
        selected: false,
        correct: false
      }
    })
    setAnswers(objAnswers)
  }, [alreadyShuffled])

  // Prepare an array of JSX AnswerField components
  let answerFields = answers.map(answer => {
    return <AnswerField key={answer.id} id={answer.id} answerText={answer.answerTxt} selected={answer.selected} answeredCorrectly={answer.correct} handleClick={selectAnswer}/>
  }) 
  
  const decodedQuestionTxt = decodeTextFromAPI(questionData.question);
  
  return(
    <section className="question-container">
        <h2 className="question-text"> {decodedQuestionTxt} </h2>
        <div className="answers-container">
          {answerFields}
        </div>
        <div className="question-separator">
        </div>
    </section>
  )
}
export default Question