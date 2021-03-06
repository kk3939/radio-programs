import React, { ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userSlice } from "../src/redux/slice";
import { RootState } from "../src/redux/store";

const initialState: RootState = {
  user: {
    name: "hoge",
    photoUrl: "",
    id: "000000",
    radios: [
      {
        index: 0,
        name: "三四郎のオールナイトニッポン0",
      },
      {
        index: 1,
        name: "オードリーのオールナイトニッポン",
      },
    ],
    isEdit: true,
  },
};

const render = (
  ui: React.ReactElement<any>,
  {
    // @ts-expect-error
    preloadedState = initialState,
    store = configureStore({
      reducer: { user: userSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
