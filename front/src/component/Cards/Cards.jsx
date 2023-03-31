import React from 'react'
import Card from '../Card/Card'
import style from "./Cards.module.css"

const Cards = (props) => {
  const {characters, onClose} = props
    return (
    <div className={style.contenedor}>
        {characters.map((character,index)=>{
            return (
            <Card  
            key={index}
            name={character.name} 
            species={character.species} 
            gender={character.gender} 
            image={character.image} 
            id={character.id}
            onClose={onClose}/>)
        }
        )}
    </div>
  )
}

export default Cards;

