import React from "react"
import reactLogo from './assets/react.svg'
import './App.css'

import WelcomeScreen from "./components/WelcomeScreen.jsx"
import QuestionsScreen from "./components/QuestionsScreen.jsx"

function App() {

  const [showWelcomeScreen, setShowWelcomeScreen] = React.useState(true)

  function startGame(){
    setShowWelcomeScreen(oldShowWelcomeScreen => !oldShowWelcomeScreen)
  }

  return (
    <div className="app-container">
      {showWelcomeScreen && <WelcomeScreen startGame={startGame}/>}
      {!showWelcomeScreen && <QuestionsScreen />}
    </div>
  )
}

export default App
