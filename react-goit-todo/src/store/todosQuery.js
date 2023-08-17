import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const todosApi = createApi({
        reducerPath: 'todosApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
        endpoints: (builder) => ({
            getAllTodos: builder.query({
                query: () => 'todos',
                providesTags: ['todosApi']
            }),
            getTodoById: builder.query({
                query: (id) => `todos/${id}`
            }),
            removeTodoById: builder.mutation({
                query: (id) => ({
                    url: `todos/${id}`,
                    method: 'DELETE',
                    providesTags: ['todosApi']
                })
            })
    }),
 })
export const {
    useGetAllTodosQuery,
    useGetTodoByIdQuery,
    useRemoveTodoByIdMutation
} = todosApi