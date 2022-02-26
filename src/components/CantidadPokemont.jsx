import { render } from '@testing-library/react'
import React from 'react'
import { useSelector } from 'react-redux'


import game_shop from '../redux/reducers/gameShopReducer'

const CantidadPokemont   = () =>{

  const game_shop = useSelector((state)=> state.game_shop)

  return (
      <>
     
         Unidades: 
         { game_shop.pokemon
        }

      
      </>
  )
}



export default  (CantidadPokemont)