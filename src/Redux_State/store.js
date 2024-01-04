import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./features/userAuthSlice";
export const store = configureStore({
  reducer: {
   user : userAuth
  },
});
