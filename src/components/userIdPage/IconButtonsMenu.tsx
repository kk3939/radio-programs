import React from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserProps, UserState } from "../../types/global";
import { userSlice } from "../../redux/slice";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signOutFromApp } from "../../functions/authentication";
import { isEditable } from "../../functions/isEditable";
import { updateFirestoreData } from "../../functions/updateFirestoreData";
import {
  CloseIconButton,
  EditIconButton,
  LogoutIconButton,
  SaveIconButton,
} from "../Common/Buttons/IconButton";

type IconButtonsProps = {
  userProps: UserProps;
};

// UrlのId部分から取得したfirestoreのユーザーのデータとAuthからstateにセットした現在のログインユーザーを比較して、コンポーネントの表示を切り替える。
const IconButtons: React.VFC<IconButtonsProps> = ({ userProps }) => {
  const userId: string = useSelector((state: RootState) => state.user.id);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <LoginAndEditableIconButtons />
      ) : (
        <LoginedIconButtons userProps={userProps} />
      )}
    </>
  );
};
export default IconButtons;

const LoginAndEditableIconButtons: React.VFC = () => {
  const router = useRouter();
  const toast = useToast();
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        pos="absolute"
        top={2}
        right={2}
        align="center"
        justifyContent="right"
        w="30%"
      >
        <SaveIconButton
          onClick={() => updateFirestoreData(user, toast, router)}
        />
        <Box w="15%" />
        <CloseIconButton
          onClick={() => {
            dispatch(userSlice.actions.changeIsEdit());
          }}
        />
      </Flex>
    </>
  );
};

const LoginedIconButtons: React.VFC<IconButtonsProps> = ({ userProps }) => {
  const router = useRouter();
  const userId: string = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  return (
    <>
      {userProps.id === userId ? (
        <Flex
          pos="absolute"
          top={2}
          right={2}
          align="center"
          justifyContent="right"
          w="30%"
        >
          <EditIconButton
            onClick={() => dispatch(userSlice.actions.changeIsEdit())}
          />
          <Box w="15%" />
          <LogoutIconButton onClick={() => signOutFromApp(dispatch, router)} />
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};
