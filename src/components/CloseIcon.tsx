import React from "react";
import { EditIcon } from "@chakra-ui/icons";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { UserDoc } from "../types/global";

type Props = {
  userProps: UserDoc;
};

const EditIconComponent: React.VFC<Props> = ({ userProps }) => {
  const user: UserDoc = useSelector((state: RootState) => state.user);
  return (
    <>
      {userProps.id === user.id ? (
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

export default EditIconComponent;
