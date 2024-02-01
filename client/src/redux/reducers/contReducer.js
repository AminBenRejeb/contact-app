import { GET_CONTACTS } from "../actionsTypes"

const initState={
    contacts:[]
}

export const contReducer=(state=initState, {type,payload})=> {

    switch(type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            }
        
            default:
                return state
    }
}