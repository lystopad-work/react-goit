import {createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAllCards} from "../services/rick-morty-services";

// AFTER
// export const fetchReduxCards = createAction('cards/fetch')
// export const cardsReducer = createReducer([], {
//     [fetchReduxCards]: (state, action) => [ ...action.payload ]
// })

export const asyncGetCards = createAsyncThunk(
    'cards/asyncGetCards',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllCards();
            const {results} = response.data;

            return results
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchReduxCards: (_, action) => [ ...action.payload ]
    },
    extraReducers: {
        [asyncGetCards.pending] : (state) => {
            return {
                ...state,
                loading: true
            }
        },
        [asyncGetCards.fulfilled] : (state, action) => {
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        },
        [asyncGetCards.rejected] : (state, action) => ({
            ...state,
            error: action.payload,
            loading: false
        })
    }
});


export const {setLoadingTrue} = cardsSlice.actions;
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