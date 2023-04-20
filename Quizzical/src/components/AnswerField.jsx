
import { decodeTextFromAPI } from "../functions/Functions";

function AnswerField(props){

  let decodedAnswerTxt = decodeTextFromAPI(props.answerText)

  let classNameAttr = "answer"
  if (props.selected && props.answeredCorrectly) {
    classNameAttr += " answer-correct"
  } else if (props.selected && !props.answeredCorrectly)
    classNameAttr += " answer-incorrect"

  return(
    <p className={classNameAttr} onClick={() => props.handleClick(props.id)}> {decodedAnswerTxt} </p>
  )
}

export default AnswerField