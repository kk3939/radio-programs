import React from "react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { UserProps } from "../../types/global";

type Props = {
  userProps: UserProps;
};

// UrlのId部分から取得したfirestoreのユーザーのデータとAuthからstateにセットした現在のログインユーザーを比較して、コンポーネントの表示を切り替える。
const EditIcons: React.VFC<Props> = ({ userProps }) => {
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
        />
      ) : (
        <EditableIcon userProps={userProps} />
      )}
    </>
  );
};

const EditableIcon: React.VFC<Props> = ({ userProps }) => {
  const userId: string = useSelector((state: RootState) => state.user.id);
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
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EditIcons;
