/* eslint-disable react-hooks/rules-of-hooks */
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { userSlice } from "../redux/slice";
import { Radios, UserDoc, UserProps } from "../types/global";

export const setLoginUserState = (userProps: UserProps): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    // ログインしているユーザーと同じmy Page出ないとstateがセットされない。
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
