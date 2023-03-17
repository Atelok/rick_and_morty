import { useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({}); 

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
    }, [detailId]);

  return (
    <div>
        <h3>Nombre: {character.name}</h3>
        <h3>Estado: {character.status}</h3>
        <h3>Especie: {character.species}</h3>
        <h3>Genero: {character.gender}</h3>
        <h3>Origen: {character.origin?.name}</h3>
        <img src={character.image} alt={character.name} />
        <Link to="/home">
          <button>Regresar</button>
          </Link> 
      
    </div>
  )
}

export default Detail