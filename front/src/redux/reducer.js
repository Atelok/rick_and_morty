import { AGREGAR, ELIMINAR, FILTER, ORDER, ALL_CHARACTER , LOGOUT} from "./action";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    access: false,
}


const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case LOGOUT:
            return {...state, access:action.payload}


        case AGREGAR:
        
        if (state.allCharacters.some((character) => character.id === action.payload.id)) {
            return state;
        } else {
        return {
            ...state, 
            myFavorites: [...state.myFavorites, action.payload], 
            allCharacters: [...state.allCharacters,action.payload]
            }}

        case ELIMINAR:
        return {...state, myFavorites: state.myFavorites.filter((favo)=>favo.id !== action.payload), allCharacters: state.allCharacters.filter((favo)=>favo.id !== action.payload)};

        case FILTER:
        const allfilterCharac = state.allCharacters.filter((favo)=>favo.gender === action.payload)
        return {...state, myFavorites: allfilterCharac}

        case ORDER:
            return {...state, myFavorites: action.payload === "Ascendente"? [...state.allCharacters.sort((a, b)=> a.id - b.id)]:[...state.allCharacters.sort((a, b)=>b.id - a.id)]}

        case ALL_CHARACTER:
            return {...state, myFavorites: [...state.allCharacters]}

    default:
        return {...state}
    }
};

export default rootReducer


// if (state.allCharacters.some((character) => character.id === action.payload.id)) {
//     return state;
//   } else {
//     return {
//       ...state,
//       myFavorites: [...state.myFavorites, action.payload],
//       allCharacters: [...state.allCharacters, action.payload],
//     };
//   }