import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    //фетч всех контактов из DB
    getAllContacts: builder.query({
      //по умолчанию метод GET (method: 'GET')
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    // Создание нового контакта
    createContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    // Удаление контакта
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    // Фильтр по имени
    // getContactByName: builder.query({
    //   query: id => `/contacts/${id}`,
    // }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useGetContactByNameQuery,
} = contactsApi;
