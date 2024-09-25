import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), 
    endpoints: (builder) => ({
        getResources: builder.query<ResourceType[], void>({
            query: () => 'resources', 
        }),
        getResourceById: builder.query<ResourceType, string>({
            query: (id) => `resources/${id}`, 
        }),
        createResource: builder.mutation<ResourceType, Partial<ResourceType>>({
            query: (newResource) => ({
                url: 'resources',
                method: 'POST',
                body: newResource,
            }),
        }),
        updateResource: builder.mutation<ResourceType, Partial<ResourceType> & { id: string }>({
            query: ({ id, ...patch }) => ({
                url: `resources/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
        deleteResource: builder.mutation<{ success: boolean }, string>({
            query: (id) => ({
                url: `resources/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetResourcesQuery,
    useGetResourceByIdQuery,
    useCreateResourceMutation,
    useUpdateResourceMutation,
    useDeleteResourceMutation,
} = api;

export default api;
