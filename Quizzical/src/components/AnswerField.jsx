
import { decodeTextFromAPI } from "../functions/Functions";

function AnswerField(props){

  let decodedAnswerTxt = decodeTextFromAPI(props.answerText)

  let classNameAttr = props.selected ? "answer answer-selected" : "answer"

  return(
    <>
      <p className={classNameAttr} onClick={() => props.handleClick(props.id)}> {decodedAnswerTxt} </p>
    </>
  )
}

export default AnswerField