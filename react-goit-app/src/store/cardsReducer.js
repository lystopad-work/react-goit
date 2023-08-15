import {combineReducers, createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import {getAllCards} from "../services/rick-morty-services";

const fetchCards = createAsyncThunk(
    'cards/fetchCards',
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

const loading = createReducer(false, {
    [fetchCards.pending] : () => true,
    [fetchCards.fulfilled] : () => false,
    [fetchCards.rejected] : () => false
})

const cards = createReducer([], {
    [fetchCards.fulfilled] : (_, action) => action.payload
})

const error = createReducer(null, {
    [fetchCards.rejected] : (_, action) => action.payload,
    [fetchCards.pending] : () => null
})

export default combineReducers({
    loading,
    cards,
    error
})