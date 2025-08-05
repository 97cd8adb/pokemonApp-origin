import React from 'react'
import './Card.css'

const Card = ({pokemon}) => {
  console.log(pokemon.sprites.front_default)
  return (
    <div className="card">
      <div>
       <img src= {pokemon.sprites.other['official-artwork'].front_default} alt=""/>
      </div>
       <div>
        <p>名前: {pokemon.name}</p>
      </div>
      <div>
        <p>タイプ: {pokemon.types.map(type => type.type.name).join(",")}</p>
      </div>
      <div>
        <p>重さ: {pokemon.weight}</p>
      </div>
      <div>
        <p>高さ: {pokemon.height}</p>
      </div>
      <div>
        <p>アビリティ: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
      </div>
    </div>
  )
}

export default Card