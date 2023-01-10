import React from "react"

export default function WelcomeScreen(props){
  return(
    <>
      <h2 className="welcome-screen-h2"> Quizzical </h2>
      <p className="welcome-screen-p">Test your skills</p>
      <button type='button'
        className="start-quiz-button" 
        onClick={props.startGame}
        > 
        Start quiz! 
      </button>
    </>
  )
}