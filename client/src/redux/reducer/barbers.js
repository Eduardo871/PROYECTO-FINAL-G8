import { GET_BARBERS } from "../action/barbers"

// solo pruebas
import barbers from "../../data.js"
// solo pruebas

const initialState = {
    barbersLoaded: []
}

const barbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBERS:
            return {
                ...state,
                barbersLoaded: barbers
            }
    
        default:
            return state
    }
}

export default barbersReducer