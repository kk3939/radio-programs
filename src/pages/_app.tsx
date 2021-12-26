/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { createContext, useState } from "react";
import "../styles/global.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../redux/store";
import { persistStore } from "redux-persist";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "cyan.700",
      },
    },
  },
});

export const UserContext = createContext<User | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  const persistor = persistStore(store);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });
export default MyApp;
