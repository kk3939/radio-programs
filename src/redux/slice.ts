import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Radios, UserState } from "../types/global";
import { RootState } from "./store";

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
    changeIsEdit(state: UserState) {
      const currentIsEdit: boolean = state.isEdit;
      return {
        ...state,
        isEdit: !currentIsEdit,
      };
    },
    addRadio(state: UserState, actions: PayloadAction<{ index: number }>) {
      const radios: Array<{
        index: number;
        name: string;
      }> = [...state.radios];
      const nextIndex: number = actions.payload.index + 1;
      const addData: {
        index: number;
        name: string;
      } = {
        index: nextIndex,
        name: "三四郎のオールナイトニッポン0",
      };
      radios.splice(nextIndex, 0, addData);
      const returnRadios = radios.map((radio, i) => {
        const copyRadio = { ...radio };
        copyRadio.index = i;
        return copyRadio;
      });
      return {
        ...state,
        radios: returnRadios,
      };
    },
    deleteRadio(state: UserState, action: PayloadAction<{ index: number }>) {
      const radios: Array<{
        index: number;
        name: string;
      }> = [...state.radios];
      const deletedRadios = [...radios].filter(
        (radio) => radio.index !== action.payload.index
      );
      const returnRadios = [...deletedRadios].map((radio, i) => {
        const copyRadio = { ...radio };
        copyRadio.index = i;
        return copyRadio;
      });
      return {
        ...state,
        radios: returnRadios,
      };
    },
  },
});
