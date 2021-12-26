import React from "react";
import Link from "next/link";
import { Center, Text } from "@chakra-ui/react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../redux/slice";
import { RootState } from "../redux/store";

const Index: React.VFC = () => {
  const dispatch = useDispatch();
  const signOutAction = () => {
    signOut(auth)
      .then(() => {
        dispatch(userSlice.actions.resetUser());
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <>
      <Layout>
        <Link href="/signIn">
          <Center>
            <Text color="white">login</Text>
          </Center>
        </Link>
        <Center>
          <Text color="white" role="button" onClick={() => signOutAction()}>
            logout
          </Text>
        </Center>
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
