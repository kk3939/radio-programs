/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/global.css";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { UserDoc } from "../types/global";
import { userSlice } from "../redux/slice";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "cyan.700",
      },
    },
  },
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });
export default MyApp;
