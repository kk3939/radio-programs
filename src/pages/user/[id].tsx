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
import { Box, Center, Divider, Flex, SimpleGrid } from "@chakra-ui/react";

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
              pt={10}
              pr={10}
              pl={10}
              boxShadow="lg"
            >
              <Center>
                <SimpleGrid columns={1} spacing={2} pr={8} pl={8} pt={2} pb={2}>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                  <h1>ks</h1>
                </SimpleGrid>
              </Center>
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default UserPage;
