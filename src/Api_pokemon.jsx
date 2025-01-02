import './Pokemon.css'
import { useState, useEffect} from 'react'
import axios, * as others from 'axios';
import useSound from "use-sound";
import pokemon from "../public/title.flac";



export function Api_pokemon({pokemons}){

    //const [pokemons, setPokemon] = useState([]);
    //const [pokemonsAbility, setPokemonAbility] = useState([]);

    // const getPokemon = async ()=> {
    // const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
    //     setPokemon(response.data.results)
    // }

//     const PokemonAbility = async () => {pokemons.map(pokemon => {
//         const reponse =  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//         .then(response => response.json())
//         .then(data =>setPokemonAbility(data.abilities))
    
//     })
// }

    // useEffect(() => {
    //     getPokemon();
    //     //PokemonAbility();
    //     count=1;
    // }, [count])
    
    const [playSound] = useSound(pokemon, {
        volume: 0.5,
        interrupt: false
      });

    const HTMLPokemons = pokemons.map((pokemon) => {
        const pokemonImg = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
      
        return (
           <ul className='items'>
               <div>
               <button onClick={playSound}><img className='imgPokemon' src={pokemon.image.hires} /></button>
               <h2>Id: {pokemon.id}</h2>
               <h2>{pokemon.name.english} </h2>
               <h2>Type: {pokemon.type}</h2>
               </div>
           </ul>
       )  
   })
   
    return(
        <div className="ContainerPokemons">
            <h1 className='title'>Api-Pokemon</h1>
        <section>{HTMLPokemons}</section>
        </div>
    )
}