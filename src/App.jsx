import { useState } from 'react'
import Key from './Key.jsx'
import React from 'react'
import Letters from './Letters.jsx'
import Languages from './Language.jsx'


function App() {

  const letterArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z']


  function HandleClick(letter){
    console.log(letter)
  }
  const allLetters = letterArray.map((lett)=>{
    return <Key key={lett} 
                keyLetter={lett} 
                onClick={()=>HandleClick(lett)}/>
  })
  
  let array= []
  for(let i = 0 ; i < 8 ; i++){
    array.push(<Letters />)
  }
  
  return (
    <>
    <div className='window'>
      <Languages/>
      <div className="Letters-container">
        {array}
      </div>
      <div id='keyboard' className='container'>
          {allLetters}
      </div>
    </div>

    </>
  )
}

export default App
