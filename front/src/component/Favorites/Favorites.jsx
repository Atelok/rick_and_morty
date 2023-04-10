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
        <>  
        <div>
            <label htmlFor="order"> Ordenar: </label>
            <select name="order" onChange={handlefunc1}>

                <option value="Order" disabled="disabled">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>

            </select>

            <label htmlFor="filter">Filtrar: </label>
            <select name="filter" onChange={handlefunc2}>

                <option value="Filter" disabled>Filter By</option>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>
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

        </>
    )
    
    
}

const mapStateToProps = (state)=>{
return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites)