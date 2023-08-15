import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            return response.json();
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchTodos.pending]: (state) => ({...state, loading: true}),
        [fetchTodos.fulfilled]: (state, action) => ({...state, todos: action.payload, loading: false}),
        [fetchTodos.rejected]: (state, action) => ({...state, loading: false, error: action.payload}),
    }
})

export default todosSlice.reducer;