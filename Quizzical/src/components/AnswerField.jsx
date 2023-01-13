import React from "react";

import { decodeTextFromAPI } from "../functions/Functions";

export default function AnswerField(props){

  let decodedAnswerTxt = decodeTextFromAPI(props.answerText)

  return(
    <>
      <p className="answer"> {decodedAnswerTxt} </p>
    </>
  )
}