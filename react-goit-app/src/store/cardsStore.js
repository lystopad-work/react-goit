import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// AFTER
// export const fetchReduxCards = createAction('cards/fetch')
// export const cardsReducer = createReducer([], {
//     [fetchReduxCards]: (state, action) => [ ...action.payload ]
// })

const cardsSlice = createSlice({
   name: 'cards',
    initialState: [],
    reducers: {
        fetchReduxCards: (state, action) => [ ...action.payload ]
    }
});

export const {fetchReduxCards} = cardsSlice.actions;
export default cardsSlice.reducer



// BEFORE

// export const cardsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case (FETCH_CARDS_SUCCESS) :
//             return {
//                 ...state,
//                 cards: action.payload
//             }
//         default:
//             return state
//     }
// }

// export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
// export const fetchCards = (payload) => ({
//     type: FETCH_CARDS_SUCCESS,
//     payload
// })