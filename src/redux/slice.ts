import {
  CaseReducers,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { UserDoc, UserState } from "../types/global";

const initialState: UserState = {
  isEdit: false,
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
    resetUser(state) {
      let copyState = { ...state };
      copyState = initialState;
      return copyState;
    },
    setUser(state, action: PayloadAction<UserState>) {
      let copyState = { ...state };
      copyState = action.payload;
      return copyState;
    },
  },
});
