import React from "react";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import HeightSpacer from "../components/HeightSpacer";
import Image from "next/image";

const Index: React.VFC = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Center p={5} align="center" flexDirection="column" minH="100vh">
          <Text
            fontSize={{
              base: "8xl",
              md: "8xl",
              lg: "9xl",
            }}
            color="white"
            fontWeight="bold"
          >
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
          p={{ base: 10, sm: 20 }}
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
          <Box
            p={{
              base: "5px",
              sm: "5px",
            }}
          >
            <Text
              color="white"
              fontSize={{ base: "2xl", sm: "4xl" }}
              fontWeight="bold"
              p={10}
            >
              Your profile displays your radios.
            </Text>
            <Text
              color="white"
              fontSize={{ base: "md", sm: "lg" }}
              fontWeight="bold"
              pr={5}
              pl={5}
            >
              You can share what you like with URL.
            </Text>
            <Text
              color="white"
              fontSize={{ base: "md", sm: "lg" }}
              fontWeight="bold"
              pr={5}
              pl={5}
            >
              About login method, we prepare only with google.
            </Text>
            <Text
              color="white"
              fontSize={{ base: "md", sm: "lg" }}
              fontWeight="bold"
              pr={5}
              pl={5}
            >
              If you have any questions and requests, please mail this app
              mantainer(kyo51310@gmail.com).
            </Text>
          </Box>
        </Center>
        <HeightSpacer spacePixel={{ base: "150px" }} />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
