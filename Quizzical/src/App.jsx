import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

import WelcomeScreen from "./components/WelcomeScreen.jsx"
import QuestionsScreen from "./components/QuestionsScreen.jsx"

function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<WelcomeScreen/>} />
          <Route path='/questions' element={<QuestionsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
