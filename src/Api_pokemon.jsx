import './Pokemon.css'
import { useState, useEffect} from 'react'
import axios, * as others from 'axios';


export function Api_pokemon(){

    let count = 0;

    const [pokemons, setPokemon] = useState([]);
    //const [pokemonsAbility, setPokemonAbility] = useState([]);

    const getPokemon = async ()=> {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
        setPokemon(response.data.results)
    }

//     const PokemonAbility = async () => {pokemons.map(pokemon => {
//         const reponse =  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//         .then(response => response.json())
//         .then(data =>setPokemonAbility(data.abilities))
    
//     })
// }

    useEffect(() => {
        getPokemon();
        //PokemonAbility();
        count=1;
    }, [count])


   
    return(
        <div className="ContainerPokemons">
            <h1 className='title'>Api-Pokemon</h1>
        <section>{pokemons.map(pokemon => {
             const pokemonImg = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
           
             return (
                <ul className='items'>
                    <div>
                    <img className='imgPokemon' src={pokemonImg} />
                    <h2>{pokemon.name} </h2>
                    </div>
                </ul>
            )  
        })}
        </section>
        </div>
    )
}