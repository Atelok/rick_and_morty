import { AGREGAR, ELIMINAR, getCharacters, EliminateCharacter } from "./action";


const initialState = {
    myFavorites: [],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case AGREGAR:
        return {...state, myFavorites: state.myFavorites};
        case ELIMINAR:
        return {...state, ELIMINAR};
    default:
        return {...state}
    }
};

export default rootReducer