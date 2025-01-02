import { useState } from 'react'
import {pokemons} from './mocks/pokemons.json'

import { Api_pokemon } from './Api_pokemon'
import './App.css'

function App() {

  return (
    <>
      <Api_pokemon pokemons={pokemons}/>
    </>
  )
}

export default App
