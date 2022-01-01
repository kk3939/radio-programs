import React from "react";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import HandmadeSpacer from "../components/Spacer";
import Image from "next/image";

const Index: React.VFC = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Center p={20} align="center" flexDirection="column">
          <Text fontSize="9xl" color="white" fontWeight="bold">
            Share your radios.
          </Text>
          <Center align="center" w="100%" h="200px">
            <Button
              fontSize="lg"
              border="1px"
              color="cyan.700"
              borderRadius="25px"
              size="lg"
              onClick={() => {
                router.push("/signIn");
              }}
            >
              Start Radio programs
            </Button>
          </Center>
        </Center>
        <Center
          align="center"
          bg="blackAlpha.50"
          pr={20}
          pl={20}
          pt={20}
          pb={20}
          flexWrap="wrap"
        >
          <Box p={10} bg="white" borderRadius="50px">
            <Image
              src="/profile2.png"
              loading="lazy"
              width="353px"
              height="363px"
            />
          </Box>
          <Box p={20}>
            <Text color="white" fontSize="3xl" fontWeight="bold" p={10}>
              Your profile displays your radios.
            </Text>
            <Text color="white" fontSize="lg" fontWeight="bold">
              You can share what you like with URL.
            </Text>
            <Text color="white" fontSize="lg" fontWeight="bold">
              About login method, we prepare only with google.
            </Text>
            <Text color="white" fontSize="lg" fontWeight="bold">
              If you have any questions and requests, please mail this app
              mantainer(kyo51310@gmail.com).
            </Text>
          </Box>
        </Center>
        <HandmadeSpacer spacePixel="300px" />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
