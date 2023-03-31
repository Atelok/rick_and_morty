import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const myButon = (style.btn, style.third);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
    <div className={style.contenedor}>
      {character.name? 
      (<div>
        <div className={style.contenedorDetail}>
          <div>
            <h3>Nombre: </h3>
            <p>{character.name}</p>
          </div>

          <div>
            <h3>Estado: </h3>
            <p>{character.status}</p>
          </div>

          <div>
            <h3>Especie: </h3>
            <p>{character.species}</p>
          </div>

          <div>
            <h3>Genero: </h3>
            <p>{character.gender}</p>
          </div>

          <div>
            <h3>Origen: </h3>
            <p>{character.origin?.name}</p>
          </div>

          <img src={character.image} alt={character.name} />
        </div>
        <div className={style.recordandoaPedro}>
        <Link to="/home">
          <button className={myButon}>
            <span className={style.texto}>Regresar</span>
          </button>
        </Link>
        </div>
      </div>)
      :(<h3>No molestar</h3>)
      }
    </div>
  );
};

export default Detail;
