import React from "react";

import { View, Text } from "react-native";

import AnswerField from "./AnswerField";
import {shuffleArray} from "../functions/Functions.js"

export default function Question(props){

  /* Prepare the array of answers - combine correct and incorrect answers, shuffle them*/
  let correctAnswer = props.questionData.correct_answer
  let incorrectAnswers = props.questionData.incorrect_answers
  let answers = incorrectAnswers.map(incAnswer => {
    return <AnswerField answerText={incAnswer}/> 
  })
  answers.push(<AnswerField answerText={correctAnswer}/>)
  answers = shuffleArray(answers)

  return(
    <section className="question-container">
      <View>
        <h2 className="question-text"> {props.questionData.question} </h2>
        <div className="answers-container">
          {answers}
        </div>
      </View>
    </section>
  )
}