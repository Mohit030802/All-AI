import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_RAPID_API_KEY;

const headers = {
  "content-type": "application/json",
  "x-rapid-api-key": apiKey,
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
