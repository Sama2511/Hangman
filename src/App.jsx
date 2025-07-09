import React, { useState, useEffect } from 'react'
import { cities } from './Cities.js'
import { getRandomWord } from './words.js'
import { clsx } from "clsx"

function App() {

  //  Game State 
  const [guessedLetters, setGuessedLetters] = useState([])
  const [hiddenWord, setHiddenWord] = useState(getRandomWord())
  const [timeleft, setTimeLeft] = useState(100)
  const [newGame , setNewGame] = useState(false)

  //  Derived Game Values 
  const wrongGuessCount = guessedLetters.filter(
    letter => !hiddenWord.includes(letter)
  ).length

  const isGameWon = hiddenWord
    .split('')
    .every(letter => guessedLetters.includes(letter))

  const isGameLost = wrongGuessCount >= cities.length || timeleft === 0
  const isGameOver = isGameWon || isGameLost

  //  Letter Pool 
  const letterArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  //  Render City Tags 
  const renderCities = cities.map((city, index) => {
    return (
      <span
        key={city.name}
        className={clsx('span-container', { 'lost': index < wrongGuessCount })}
        style={{ backgroundColor: city.backgroundColor, color: city.color }}
      >
        {city.name}
      </span>
    )
  })

  //  Handle Letter Guess 
  function handleClick(letter) {
    setGuessedLetters(prev =>
      prev.includes(letter) ? prev : [...prev, letter]
    )
  }

  //  Render On-Screen Keyboard 
  const allLetters = letterArray.map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && hiddenWord.includes(letter)
    const isIncorrect = isGuessed && !hiddenWord.includes(letter)

    const classname = clsx('keyBtn',{
      correct: isCorrect,
      incorrect: isIncorrect
    })

    return (
      <button
        key={letter}
        disabled={isGameOver}
        className={classname}
        onClick={() => handleClick(letter)}
      >
        {letter}
      </button>
    )
  })

  //  Reveal Hidden Word 
  const splitWord = hiddenWord.split('').map((letter, index) => {
    const reveal = isGameLost || guessedLetters.includes(letter) 
    return (
      <span 
        className= {clsx(isGameLost && !guessedLetters.includes(letter) && 'missed-letter')}
        key={index}>
        {reveal ? letter : ''}
      </span>
    )
  })


  //  Restart Game 
    function restartGame(){
      setGuessedLetters([])
      setHiddenWord(getRandomWord())
      setNewGame(prev=> !prev)
      setTimeLeft(100)
    }
  

   useEffect(()=>{

    const id = setInterval(() => {
     setTimeLeft(prev => {
      if(prev <= 1){
        clearInterval(id)
        return 0 
      }
        return prev -10
    })
    }, 1000)

    return()=> clearInterval(id)

  },[newGame])



  //  User Interface
  return (
    <>
      <div className='window'>
        <header>
          <h1>Last City Standing</h1>
          <p>Guess the word or watch Aussie cities get nuked!</p>
        </header>

        <section className={clsx('status', { Won: isGameWon, Lost: isGameLost })}>
          {isGameWon ? <h2>You win</h2> : isGameLost ? <h2>You lost</h2> : ''}
          {isGameWon ? <p>Well done! 🎉</p> : isGameLost ? <p>Australia is Doomed 😭</p> : ''}
        </section>

        <section className='Cities-container'>
          {renderCities}
        </section>

        <section className="Letters-container">
          {splitWord}
        </section>

        <section id='keyboard' className='container'>
          {allLetters}
        </section>

        {isGameOver && <button onClick={restartGame} className='newGame-btn'>New Game</button>}
        <div className='progress-container'>
          <div className='progress-bar' style={{width: `${timeleft}%`}}></div>
        </div>
      </div>
    </>
  )
}

export default App
