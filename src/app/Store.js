import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../redux/CryptoApi";
import { CryptoNewsApi } from "../redux/CryptoNewsApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware, CryptoNewsApi.middleware),

 
});
