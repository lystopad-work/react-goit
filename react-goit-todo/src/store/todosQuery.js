import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:3002/'
export const todosApi = createApi({
        reducerPath: 'todosApi',
        tagTypes: ['Todos'],
        baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
        endpoints: (builder) => ({
            getAllTodos: builder.query({
                query: () => 'todos',
                providesTags: ['Todos'],
            }),
            getTodoById: builder.query({
                query: (id) => `todos/${id}`
            }),
            removeTodoById: builder.mutation({
                query: (id) => ({
                    url: `todos/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Todos']
            })
    }),
 })
export const {
    useGetAllTodosQuery,
    useRemoveTodoByIdMutation
} = todosApi