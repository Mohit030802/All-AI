import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const apiKey=import.meta.env.VITE_RAPID_API_KEY;
const headers={
    'x-rapidapi-key':apiKey,
    'x-rapidapi-host':'article-extractor-and-summarizer.p.rapidapi.com'
}
const createRequest=(url)=>({url,headers})

export const articleApi=createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/'}
    
    ),
    endpoints:(builder)=>({
        getArticleSummary:builder.query({
            query:(params)=>createRequest(`summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`)
        })
    })

})
export const {useLazyGetArticleSummaryQuery} = articleApi;