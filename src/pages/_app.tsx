/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../asset/global.css";
import { Provider } from "react-redux";
import NextNprogress from "nextjs-progressbar";
import { store } from "../redux/store";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "cyan.700",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <NextNprogress />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });
export default MyApp;
