import {connect, useDispatch, useSelector} from "react-redux"
import Card from "../Card/Card"
import style from "../Cards/Cards.module.css"
import {FilterCards, OrderCards, AllCharacter}from "../../redux/action"
import { useEffect } from "react"



const Favorites = ()=>{

    const favorites = useSelector((state)=>state.myFavorites)

    const dispatch = useDispatch();

    

    const handlefunc1 = (event)=>{
        dispatch(OrderCards(event.target.value))
    }
    const handlefunc2 = (event)=>{
        if (event.target.value === "Todos") {
        return dispatch(AllCharacter())
        }
        dispatch(FilterCards(event.target.value))
    }

    useEffect(()=>{

    
    },[favorites])

    return(
        <div className={style.MainDIV}>  

        <div className={style.divcontainer}>

            <div className={style.selectContainer}>

            <label className={style.div_container} htmlFor="order"> Ordenar: </label>
            <select className={style.select} name="order" onChange={handlefunc1}>

                <option className={style.optionFav} value="Order" disabled="disabled">Order By</option>
                <option className={style.optionFav} value="Ascendente">Ascendente</option>
                <option className={style.optionFav} value="Descendente">Descendente</option>

            </select>

            </div>


            <div className={style.selectContainer}>
            <label className={style.div_container} htmlFor="filter">Filtrar: </label>
            <select className={style.select} name="filter" onChange={handlefunc2}>

                <option className={style.optionFav} value="Filter" disabled>Filter By</option>
                <option className={style.optionFav} value="Todos">Todos</option>
                <option className={style.optionFav} value="Male">Male</option>
                <option className={style.optionFav} value="Female">Female</option>
                <option className={style.optionFav} value="Genderless">Genderless</option>
                <option className={style.optionFav} value="unknown">unknown</option>

            </select>
            </div>

        </div>
        <div className={style.contenedor}>
            {favorites.map((fav, index)=>{
                return(
                    <div className={style.yonatan}>
                    <Card  
                    key={index}
                    name={fav.name} 
                    species={fav.species} 
                    gender={fav.gender} 
                    image={fav.image} 
                    id={fav.id} />
                    </div>
                )
            })}
        </div>

        </div>
    )
    
    
}

const mapStateToProps = (state)=>{
return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites)