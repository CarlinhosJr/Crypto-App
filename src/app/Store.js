import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../redux/CryptoApi";
import { CryptoExchangesApi } from "../redux/CryptoExchangesApi";
import { CryptoNewsApi } from "../redux/CryptoNewsApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
    [CryptoExchangesApi.reducerPath]: CryptoExchangesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CryptoApi.middleware,
      CryptoNewsApi.middleware,
      CryptoExchangesApi.middleware
    ),
});
