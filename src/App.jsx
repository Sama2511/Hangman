import { useEffect, useState } from 'react'
import Key from './Key.jsx'
import React from 'react'
import {cities} from './Cities.js'

function App() {
  const [pressedKeys, setPressedkeys] = React.useState([])
  const [Words, setWords] = React.useState('testing')


  const letterArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z']

  const renderCities = cities.map((city) => {
    return ( 
      <span key={city.name} style={{backgroundColor: city.backgroundColor, color: city.color}}>
        {city.name}
      </span>
    )
  })

  function HandleClick(letter){
    setPressedkeys(prevkeys =>(
      prevkeys.includes(letter) ? [...prevkeys] : [...prevkeys, letter]
    ))

    console.log(pressedKeys)
  }

  useEffect(()=>{
      console.log(pressedKeys)
  },[pressedKeys])

  const allLetters = letterArray.map((lett)=>{
    return <Key key={lett} 
                keyLetter={lett} 
                onClick={()=>HandleClick(lett)}/>
  })
  

  const splitWord = Words.split('').map((word, index) => {
    return <span key={index}> {word.toUpperCase()} </span> 
  })


  
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
    </div>

    </>
  )
}

export default App
