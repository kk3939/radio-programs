/* eslint-disable react-hooks/rules-of-hooks */
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { userSlice } from "../redux/slice";
import { UserDoc } from "../types/global";

export const setLoginUserState = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    // オブザーバーで監視しているため、初期化状態→authセットアップ完了で2回dispatchされる場合がある。
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docData: UserDoc = {
          id: user.uid,
          photoUrl: user.photoURL,
          name: user.displayName,
          radios: [],
        };
        dispatch(
          userSlice.actions.setUser({
            ...docData,
            isEdit: false,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
