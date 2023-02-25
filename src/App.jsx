import { useState } from 'react'
import TituloPrincipal from './components/TituloPrincipal'
import './App.css'
import FrasesCard from './components/FrasesCard'
import frases from './data/frases.json'

function App() {
  
  const fondo = [1, 2, 3, 4]

  const[ index, setIndex ] = useState(0)
  const changeFrase = () => {
    
      setIndex(Math.floor(Math.random() * 15))

  }

  const[ numFondo, setNumFondo ] = useState(0)

  const changeFondo = () => {
    if (numFondo === fondo.length -1) {
      setNumFondo(0);
    } else{
      setNumFondo(numFondo + 1)
    }
  }


  return (
    <div className="App" style={{backgroundImage: "url('fondo"+fondo[numFondo]+".jpg')"}}>
      <TituloPrincipal/>
      <FrasesCard
      fraseIndex = {frases[index]}/>
      <button onClick={ () => {changeFrase(), changeFondo()}} className="boton">¡Romper Otra!</button>
    </div>
  )
}

export default App
