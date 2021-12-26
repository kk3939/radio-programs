import {
  CaseReducers,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { UserDoc } from "../types/global";
import { RootState } from "./store";

const initialState: UserDoc = {
  name: "",
  id: "",
  photoUrl: "",
  radios: [],
};

// @ts-ignore
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: RootState, action: PayloadAction<UserDoc>) {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});
