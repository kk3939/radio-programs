import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { converter, db } from "../../firebase";
import { initialState } from "../redux/slice";
import { UserDoc, UserProps } from "../types/global";

export async function fetchUserDocs(id: string): Promise<UserProps> {
  const userDocRef: DocumentReference<UserDoc> = doc(
    db,
    "users",
    id
  ).withConverter(converter());
  const userDocSnap: DocumentSnapshot<UserDoc> = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    const data: UserDoc = userDocSnap.data();
    return data;
    // eslint-disable-next-line no-else-return
  } else {
    return initialState;
  }
}
