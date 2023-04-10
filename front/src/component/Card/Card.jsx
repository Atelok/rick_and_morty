import React, { useEffect, useState } from 'react'
import {NavLink, useLocation} from "react-router-dom"
import style from "./Card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import {getCharacters, EliminateCharacter } from "../../redux/action"

const Card = ({name, species, gender, image,  onClose, id}) => {


const Favorite = useSelector((state)=>state.myFavorites);
const dispatch = useDispatch();
const [isFav, setIsFav] = useState(false);


useEffect(() => {
  Favorite.forEach((fav) => {
    if (fav.id === id) {
        setIsFav(true);
    }
  });
}, [Favorite]);


const handleFavorite = ()=> {
  if (isFav) {
    setIsFav(false);
    dispatch(EliminateCharacter(id))
  }else{
    setIsFav(true);
    dispatch(getCharacters({name, species, gender, image,  onClose, id}))
  }
}

const {pathname} =useLocation()

  return (
    
    <div className={style.contCard}>
      {isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
      (<button onClick={handleFavorite}>🤍</button>)}
      <div>
      {pathname !== "/favorites"  && <button className={style.button} onClick={()=>onClose(id)}></button>}  
      </div>
        <div className={style.hdos}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        </div>

        <NavLink className={style.link_style} to={ `/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
        </NavLink>

        <div className={style.conImg}>
        <NavLink className={style.redondex} to={ `/detail/${id}`}>
        <img className={style.image} src={image} alt={name}/>
        </NavLink>
        </div>
    </div>
  )
}

export default Card;