import {combineReducers} from "redux";
import {cardsReducer} from "./cardsReducer";
export const rootReducer = combineReducers({
    cards: cardsReducer
})