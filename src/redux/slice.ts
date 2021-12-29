import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserState } from "../types/global";

export const initialState: UserState = {
  isEdit: false,
  name: "",
  id: "",
  photoUrl: "",
  radios: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser() {
      return initialState;
    },
    setUser(_, action: PayloadAction<UserState>) {
      return action.payload;
    },
    updateUserName(state: UserState, action: PayloadAction<string>) {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});
