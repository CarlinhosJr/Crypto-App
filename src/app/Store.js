import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../redux/CryptoApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
  },
});
