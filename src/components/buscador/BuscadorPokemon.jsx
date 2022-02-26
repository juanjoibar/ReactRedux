import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchPokemon from '../../redux/actions/buscadorAction'

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon_name, set_pokemon_name] = useState('newtwo')

  return (
    <div>
        <div className="form-group"
        ><label htmlFor="" className="text-white"> Buscar Pokemon
            </label>
            <input type="text" className="form-control" id="buscar_pokemon" 
            value={pokemon_name} 
            onChange= {
              (e)=>{
                set_pokemon_name(e.target.value)
              }
            }
            />
            <button className="btn btn-primary mt-3" onClick={
              ()=>{
                dispatch(fetchPokemon(pokemon_name))
              }
            }>Enviar </button></div>
    </div>
  )
}

export default BuscadorPokemon