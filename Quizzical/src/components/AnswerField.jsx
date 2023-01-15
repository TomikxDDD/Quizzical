import React from "react";
import { memo } from "react";

import { decodeTextFromAPI } from "../functions/Functions";

function AnswerField(props){

  let decodedAnswerTxt = decodeTextFromAPI(props.answerText)

  let classNameAttr = props.selected ? "answer answer-selected" : "answer"

  console.log(props.selected, classNameAttr)
  return(
    <>
      <p className={classNameAttr} onClick={() => props.handleClick(props.id)}> {decodedAnswerTxt} </p>
    </>
  )
}

export default memo(AnswerField)