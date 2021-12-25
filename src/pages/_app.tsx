/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { createContext, useState } from "react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "cyan.900",
      },
    },
  },
});

export const UserContext = createContext<User | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (callbackUser) => {
    if (callbackUser) {
      setUser(callbackUser);
    } else {
      setUser(null);
    }
  });
  console.log(user);
  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={user}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });
export default MyApp;
