import { configureStore } from "@reduxjs/toolkit";
import userSlice from "futures/Auth/components/userSlice";

const rootReducer = {
  user: userSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
