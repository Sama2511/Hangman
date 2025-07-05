import { useEffect, useState } from 'react'
import Key from './Key.jsx'
import React from 'react'
import Letters from './Letters.jsx'
import {cities} from './Cities.js'

function App() {
  const [pressedKeys, setPressedkeys] = useState([])

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
    setPressedkeys(prevkeys =>([...prevkeys , letter]))
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
  

  let userInput= new Array(8).fill(null)

  const displayedLetter= userInput.map((input, i)=>{
    return <Letters key ={i} input={input}/>
  })
  
  return (
    <>
    <div className='window'>
      <div className='Cities-container'>
        {renderCities}
      </div>
      <div className="Letters-container">
        {displayedLetter}
      </div>
      <div id='keyboard' className='container'>
          {allLetters}
      </div>
    </div>

    </>
  )
}

export default App
