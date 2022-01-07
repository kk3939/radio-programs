import React from "react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../types/global";
import { userSlice } from "../../redux/slice";
import { Box, Flex, Tooltip, Icon } from "@chakra-ui/react";
import SaveIconButton from "./SaveIconButton";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { signOutFromApp } from "../../functions/authentication";
import { isEditable } from "../../functions/isEditable";

type Props = {
  userProps: UserProps;
};

// UrlのId部分から取得したfirestoreのユーザーのデータとAuthからstateにセットした現在のログインユーザーを比較して、コンポーネントの表示を切り替える。
const EditIcons: React.VFC<Props> = ({ userProps }) => {
  const dispatch = useDispatch();
  const userId: string = useSelector((state: RootState) => state.user.id);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <Flex
          pos="absolute"
          top={2}
          right={2}
          align="center"
          justifyContent="right"
          w="30%"
        >
          <SaveIconButton />
          <Box w="15%" />
          <Tooltip
            label="close this edit page"
            aria-label="close button description"
          >
            <CloseIcon
              role="button"
              aria-label="close"
              w={5}
              h={5}
              color="blackAlpha.700"
              onClick={() => {
                dispatch(userSlice.actions.changeIsEdit());
              }}
            />
          </Tooltip>
        </Flex>
      ) : (
        <EditableIcon userProps={userProps} />
      )}
    </>
  );
};

const EditableIcon: React.VFC<Props> = ({ userProps }) => {
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
          <Tooltip label="edit your page" aria-label="edit Button description">
            <EditIcon
              role="button"
              aria-label="edit"
              w={6}
              h={6}
              color="blackAlpha.700"
              onClick={() => {
                dispatch(userSlice.actions.changeIsEdit());
              }}
            />
          </Tooltip>
          <Box w="15%" />
          <Icon
            as={FiLogOut}
            w={7}
            h={7}
            color="red.400"
            role="button"
            aria-label="logout"
            onClick={() => {
              signOutFromApp(dispatch, router);
            }}
          />
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};

export default EditIcons;
