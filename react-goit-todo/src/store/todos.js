import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";

export const selectTodos = state => state.todos;
export const selectCompletedTodos =
    createSelector(selectTodos, ({todos}) => todos.filter((todo) => todo.completed));

export const selectTodosCountDifference =
    createSelector([selectTodos, selectCompletedTodos],
        ({todos}, completedTodos) => {
            const todosCount = todos.length;
            const completedTodosCount = completedTodos.length;

            return { difference: todosCount - completedTodosCount }
        }
    )
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
    extraReducers: {
        [fetchTodos.pending]: (state) => ({...state, loading: true}),
        [fetchTodos.fulfilled]: (state, action) => ({...state, todos: action.payload, loading: false}),
        [fetchTodos.rejected]: (state, action) => ({...state, loading: false, error: action.payload}),
    }
})

export default todosSlice.reducer;