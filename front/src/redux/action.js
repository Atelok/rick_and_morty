export const AGREGAR = "AGREGAR"
export const ELIMINAR = "ELIMINAR"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const ALL_CHARACTER = "ALL_CHARACTER"
export const LOGOUT = "LOGOUT"

export const getCharacters =(character)=>{
    return {type:AGREGAR, payload: character}
}

export const EliminateCharacter = (id)=>{
    return {type:ELIMINAR, payload:id }
}

export const FilterCards = (gender)=>{
    return {type:FILTER, payload:gender}
}
export const OrderCards = (id)=>{
    return {type:ORDER, payload:id}
}
export const AllCharacter = ()=>{
    return {type:ALL_CHARACTER}
}
export const Logout = (verif)=>{
    return {type:LOGOUT, payload: verif}
}



