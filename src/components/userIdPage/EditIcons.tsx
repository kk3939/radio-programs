import React from "react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../types/global";
import { userSlice } from "../../redux/slice";

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
      {isEdit && userProps.id === userId ? (
        <CloseIcon
          pos="absolute"
          w={6}
          h={6}
          top={2}
          right={2}
          color="blackAlpha.700"
          onClick={() => {
            dispatch(userSlice.actions.changeIsEdit());
          }}
        />
      ) : (
        <EditableIcon userProps={userProps} />
      )}
    </>
  );
};

const EditableIcon: React.VFC<Props> = ({ userProps }) => {
  const userId: string = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  return (
    <>
      {userProps.id === userId ? (
        <EditIcon
          pos="absolute"
          w={6}
          h={6}
          top={2}
          right={2}
          color="blackAlpha.700"
          onClick={() => {
            dispatch(userSlice.actions.changeIsEdit());
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EditIcons;
