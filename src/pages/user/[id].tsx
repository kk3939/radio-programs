import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  doc,
  DocumentData,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { UserContext } from "../_app";
import { UserDoc } from "../../types/global";

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
              id: data.uid,
              name: data.name,
              photoUrl: data.photoUrl,
              radios: data.radios,
            };
          },
        });
        const userDocRef = doc(db, "users", userFromContext.uid).withConverter(
          converter()
        );
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const data: UserDoc = userDocSnap.data();
          setUser(data);
          console.log(userDocSnap.data());
        } else {
          console.log("cannot fetch data!!!");
        }
      };
    }
  }, [userFromContext]);
  return <div />;
};

export default UserPage;
