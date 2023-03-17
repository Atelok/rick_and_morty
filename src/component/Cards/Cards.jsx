import React from 'react'
import Card from '../Card/Card'

const Cards = (props) => {
  const {characters, onClose} = props
    return (
    <div style={{display:"flex"}}>
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

