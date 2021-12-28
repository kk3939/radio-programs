import React from "react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { UserDoc } from "../types/global";

type Props = {
  userProps: UserDoc;
};

const EditIcons: React.VFC<Props> = ({ userProps }) => {
  const userState: UserDoc = useSelector((state: RootState) => state.user);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  return (
    <>
      {isEdit && userProps.id === userState.id ? (
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
  const userState: UserDoc = useSelector((state: RootState) => state.user);
  return (
    <>
      {userProps.id === userState.id ? (
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
