import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice";
import logger from "redux-logger";

const reducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
