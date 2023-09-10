import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_RAPID_API_KEY;

const headers = {
  "content-type": "application/json",
  "x-rapid-api-key": '79d61ffe18msh14392944de1e02cp1b32d2jsn3bcfc9949a6b',
  "x-rapidapi-host": "open-ai21.p.rapidapi.com",
};

export const chatgptApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://open-ai21.p.rapidapi.com" }),
  endpoints: (builder) => ({
    fetchConversationGpt: builder.query({
      query: (message) => ({
        url: "/conversationgpt",
        method: "POST",
        headers,
        body: { messages: [{ role: 'user', content: message }] },
      }),
    }),
  }),
});

export const { useFetchConversationGptQuery } = chatgptApi;
