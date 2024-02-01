import { createStore, applyMiddleware } from 'redux'
import { contReducer } from "./reducers/contReducer";
import {thunk} from 'redux-thunk'

export const store= createStore(contReducer,applyMiddleware(thunk))