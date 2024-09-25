import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const api = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust base URL as needed
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => 'category', // Adjust endpoint as needed
        }),
        createCategory: builder.mutation<Category, Partial<Category>>({
            query: (newCategory) => ({
                url: 'category',
                method: 'POST',
                body: newCategory,
            }),
        }),
        updateCategory: builder.mutation<Category, Partial<Category> & { id: string }>({
            query: ({ id, ...patch }) => ({
                url: `category`,
                method: 'PUT',
                body: { id, ...patch },
            }),
        }),
        deleteCategory: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `category`,
                method: 'DELETE',
                body: { id },
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = api;

export default api;