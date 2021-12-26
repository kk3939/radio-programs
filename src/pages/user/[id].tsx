import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { UserContext } from "../_app";
import { UserDoc } from "../../types/global";
import { Flex, Box, Center, Divider, Image, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const userFromContext = useContext(UserContext);
  const initialState: UserDoc = {
    name: "",
    photoUrl: "",
    id: "",
    radios: [],
  };
  const [user, setUser] = useState<UserDoc>(initialState);

  useEffect(() => {
    if (userFromContext !== null) {
      const fetchUserDocs = async () => {
        const converter = () => ({
          toFirestore: (data: UserDoc) => data,
          fromFirestore: (
            snapshot: QueryDocumentSnapshot<DocumentData>
          ): UserDoc => {
            const data = snapshot.data();
            return {
              id: data.id,
              name: data.name,
              photoUrl: data.photoUrl,
              radios: data.radios,
            };
          },
        });

        const userDocRef: DocumentReference<UserDoc> = doc(
          db,
          "users",
          userFromContext.uid
        ).withConverter(converter());
        const userDocSnap: DocumentSnapshot<UserDoc> = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data: UserDoc = userDocSnap.data();
          setUser(data);
          console.log(userDocSnap.data());
        } else {
          console.log("cannot fetch data!!!");
        }
      };
      fetchUserDocs();
    }
  }, [userFromContext]);

  const returnPhotoUrl = (arg: UserDoc): string | undefined => {
    if (arg.photoUrl === null) {
      return undefined;
    }
    return arg.photoUrl;
  };

  const returnUserName = (arg: UserDoc): string => {
    if (arg.name === null) {
      return "This user's name isn't setup.";
    }
    return arg.name;
  };

  return (
    <>
      <Box pos="relative">
        <Box w="100%" pos="absolute" top="100px" left="0">
          <Center>
            <Box
              align="center"
              justifyContent="center"
              bg="white"
              w="70%"
              borderRadius="25px"
              p={10}
              boxShadow="lg"
            >
              <Center flexDirection="column">
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src={returnPhotoUrl(user)}
                  alt="user"
                />
                <Text fontSize="lg" fontWeight="bold" p={3}>
                  {returnUserName(user)}
                </Text>
                <Divider mb={5} />
                <Box pl={10} pr={10} w="100%">
                  <Center flexDirection="column" w="100%">
                    <Text
                      pt={2}
                      pb={2}
                      color="blackAlpha.700"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      your listening radio programs are following....
                    </Text>
                    <Box w="100%" p={4}>
                      <Center>
                        <Box pl={10} pr={10}>
                          <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                            <Flex
                              justifyContent="center"
                              h="100%"
                              align="center"
                            >
                              <Text>emoji</Text>
                            </Flex>
                          </Box>
                        </Box>
                        <Text fontSize="2xl" fontWeight="bold">
                          三四郎のオールナイトニッポン0
                        </Text>
                      </Center>
                    </Box>
                    <Box w="100%" p={4}>
                      <Center>
                        <Box pl={10} pr={10}>
                          <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                            <Flex
                              justifyContent="center"
                              h="100%"
                              align="center"
                            >
                              <Text>emoji</Text>
                            </Flex>
                          </Box>
                        </Box>
                        <Text fontSize="2xl" fontWeight="bold">
                          三四郎のオールナイトニッポン0
                        </Text>
                      </Center>
                    </Box>
                    <Box w="100%" p={4}>
                      <Center>
                        <Box pl={10} pr={10}>
                          <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                            <Flex
                              justifyContent="center"
                              h="100%"
                              align="center"
                            >
                              <Text>emoji</Text>
                            </Flex>
                          </Box>
                        </Box>
                        <Text fontSize="2xl" fontWeight="bold">
                          三四郎のオールナイトニッポン0
                        </Text>
                      </Center>
                    </Box>
                  </Center>
                </Box>
              </Center>
            </Box>
          </Center>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default UserPage;
