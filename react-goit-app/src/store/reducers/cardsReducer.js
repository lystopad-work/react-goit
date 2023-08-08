import {FETCH_CARDS, FETCH_CARDS_ERROR, FETCH_CARDS_SUCCESS} from "../actions/cardsActions";

const initialState = {
    cards: [],
    loading: false,
    error: false,
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_CARDS) :
            return {
                ...state,
                loading: true
            }
        case (FETCH_CARDS_SUCCESS) :
            return {
                ...state,
                cards: action.payload
            }

        case (FETCH_CARDS_ERROR) :
            return {
                ...state,
                error: true
            }

        default:
            return state
    }
}