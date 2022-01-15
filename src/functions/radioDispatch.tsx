import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ReducerType, UserState } from "../types/global";

export const addRadio = (
  radios: Array<{
    index: number;
    name: string;
  }>,
  dispatch: Dispatch<any>,
  reducer: ReducerType
) => {
  if (radios.length === 20) {
    alert("Sorry, radio's limits is 20.");
  }
  dispatch(reducer);
};

export const deleteRadio = (
  radios: Array<{
    index: number;
    name: string;
  }>,
  dispatch: Dispatch<any>,
  reducer: ReducerType
) => {
  if (radios.length === 1) {
    alert("Radio's minimum value is 1. ");
    return;
  }
  dispatch(reducer);
};
