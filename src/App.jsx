import { useEffect, useState } from 'react'
import React from 'react'
import {cities} from './Cities.js'
import { clsx } from "clsx"

function App() {
  const [guessedLetters, setguessedLetters] = React.useState([])
  const [hiddenWord, sethiddenWord] = React.useState('NANNI')
  const [GameOver, setGameOver] = useState(false)

  const letterArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z']

    let wrongGuessCount = guessedLetters.filter(letter=>
        !hiddenWord.includes(letter)).length
    

  const renderCities = cities.map((city, index) => {

    return ( 
      <span className={clsx('span-container', {'lost': index < wrongGuessCount}  )}
      key={city.name} 
      style={{backgroundColor: city.backgroundColor, 
      color: city.color}}
      >
        {city.name}
      </span>
    )
  })

  function HandleClick(letter){
    setguessedLetters(prevkeys =>(
      prevkeys.includes(letter) ? [...prevkeys] : [...prevkeys, letter]
    ))
  }


  const allLetters = letterArray.map((letter)=>{
      const isGuessed = guessedLetters.includes(letter)
      const isCorrect = isGuessed && hiddenWord.includes(letter)
      const isIncorrect = isGuessed && !hiddenWord.includes(letter)

      const classname = clsx({correct: isCorrect, incorrect: isIncorrect})


    return (<button className = {classname}
                key={letter} 
                onClick={()=>HandleClick(letter)} >
                {letter} </button>
                )
  })

  

  const splitWord = hiddenWord.split('').map((word, index) => {
    return (
    <span key={index}> 
      {guessedLetters.includes(word)? word : ''} 
    </span>
    ) 
  })
  useEffect(()=>{
    wrongGuessCount === renderCities.length && setGameOver(true)
  },[guessedLetters])

  return (
    <>
    <div className='window'>
      <div className='Cities-container'>
        {renderCities}
      </div>
      <div className="Letters-container">\
        {splitWord}
      </div>
      <div id='keyboard' className='container'>
          {allLetters}
      </div>
      { GameOver && <button className='newGame-btn'>New Game</button>}
    </div>

    </>
  )
}

export default App
