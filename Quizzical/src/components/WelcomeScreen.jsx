
import { Link } from "react-router-dom"

export default function WelcomeScreen(){
  return(
    <>
      <h2 className="welcome-screen-h2"> Quizzical </h2>
      <p className="welcome-screen-p">Test your skills</p>
      <Link to='/questions'>
        <button type='button' className="btn start-quiz-button" >Start quiz! </button>
      </Link>
    </>
  )
}