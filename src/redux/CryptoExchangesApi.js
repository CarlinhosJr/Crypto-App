import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "fcf8bf4a05msh9fbe255e3296493p11026bjsnf31bc16b18d4",
  "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
};

const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const CryptoExchangesApi = createApi({
  reducerPath: "CryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest("/api/exchanges/"),
    }),
  }),
});

export const { useGetExchangesQuery } = CryptoExchangesApi;
