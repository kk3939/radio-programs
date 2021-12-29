import React from "react";
import Link from "next/link";
import { Center, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { signOutFromApp } from "../functions/authentication";
import { useDispatch } from "react-redux";

const Index: React.VFC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Layout>
        <Link href="/signIn">
          <Center>
            <Text color="white">login</Text>
          </Center>
        </Link>
        <Center>
          <Text
            color="white"
            role="button"
            onClick={() => signOutFromApp(dispatch)}
          >
            logout
          </Text>
        </Center>
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
