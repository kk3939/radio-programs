import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { UserDoc } from "../../types/global";

export const createUserDoc = async (user: User) => {
  const docData: UserDoc = {
    id: user.uid,
    photoUrl: user.photoURL,
    name: user.displayName,
    radios: [
      {
        index: 0,
        name: "三四郎のオールナイトニッポン0",
      },
    ],
  };
  await setDoc(doc(db, "users", user.uid), docData);
};
