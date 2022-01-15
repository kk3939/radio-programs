/* eslint-disable react-hooks/rules-of-hooks */
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { NextRouter } from "next/router";
import { auth, converter, db } from "../../../firebase";
import { userSlice } from "../../redux/slice";
import { UserDoc, UserProps } from "../../types/global";
import { createUserDoc } from "./createUserDoc";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// hooks APIはfunctional component内でcallする必要があるため、引数で受け渡す
export const signOutFromApp = (
  dispatch: ReturnType<typeof useDispatch>,
  router: NextRouter
): void => {
  signOut(auth)
    .then(() => {
      dispatch(userSlice.actions.resetUser());
      router.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

// hooks APIはfunctional component内でcallする必要があるため、引数で受け渡す
export const signInWithGoogle = (
  router: NextRouter,
  toast: ReturnType<typeof useToast>
): void => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user: User = result.user;
      // users collectionの中でloginしたユーザーと同じドキュメントを抽出するクエリ
      const q = query(
        collection(db, "users"),
        where("id", "==", user.uid)
      ).withConverter(converter());
      const userDocCorrespondingSignInUser = await getDocs(q);
      const userDocArray: Array<QueryDocumentSnapshot<UserDoc>> =
        userDocCorrespondingSignInUser.docs;

      if (userDocArray.length === 0) {
        // ユーザーが存在しないということなので、新規でユーザー作成
        createUserDoc(user);
        router.push(`/user/${user.uid}`);
      } else {
        // ユーザーが既に存在する。
        router.push(`/user/${user.uid}`);
      }
    })
    .catch(() => {
      // ログイン失敗時のpopup
      toast({
        position: "top",
        title: "Can't login with your Account.",
        description: `It occurs some problems.`,
        status: "error",
        duration: 8000,
        isClosable: true,
      });
    });
};

export const setLoginUserState = (userProps: UserProps): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    // ログインしているユーザーと同じmyPageでないとstateがセットされない。
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid === userProps.id) {
          const radios: Array<{
            index: number;
            name: string;
          }> = [];
          userProps.radios.forEach((radio) => {
            radios.push(radio);
          });
          const docData: UserDoc = {
            id: user.uid,
            photoUrl: user.photoURL,
            name: user.displayName,
            radios: radios,
          };
          dispatch(
            userSlice.actions.setUser({
              ...docData,
              isEdit: false,
            })
          );
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
