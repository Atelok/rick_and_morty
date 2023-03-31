import React from 'react'
import {NavLink} from "react-router-dom"
import style from "./Card.module.css"

const Card = ({name, species, gender, image,  onClose, id}) => {
  return (

    <div className={style.contCard}>

        <button className={style.button} onClick={()=>onClose(id)}></button>
      
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