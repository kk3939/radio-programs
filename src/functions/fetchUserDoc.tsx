import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { initialState } from "../redux/slice";
import { UserDoc, UserProps } from "../types/global";

export async function fetchUserDocs(id: string): Promise<UserProps> {
  // fetchでデータを取ってくる際に、型を定義させてあげる。
  const converter = () => ({
    toFirestore: (data: UserDoc) => data,
    fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): UserDoc => {
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
