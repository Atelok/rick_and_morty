export const AGREGAR = "AGREGAR"
export const ELIMINAR = "ELIMINAR"

export const getCharacters =()=>{
    return {type:AGREGAR, payload: character}
}

export const EliminateCharacter = ()=>{
    return {type:ELIMINAR}
}