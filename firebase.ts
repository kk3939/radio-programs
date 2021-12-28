import { initializeApp } from "firebase/app";
import {
  DocumentData,
  getFirestore,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { UserDoc } from "./src/types/global";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// https://firebase.google.com/docs/web/setup#available-libraries
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// fetchでデータを取ってくる際に、型を定義させてあげる。
export const converter = () => ({
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
