import React from "react";
import { Text } from "@chakra-ui/react";
import { UserProps } from "../../types/global";

type Props = {
  userProps: UserProps;
};

const UserNameText: React.VFC<Props> = ({ userProps }) => {
  const returnUserName = (arg: UserProps): string => {
    if (arg.name === null) {
      return "This user's name isn't setup.";
    }
    return arg.name;
  };

  return (
    <>
      <Text fontSize="lg" fontWeight="bold" p={3}>
        {returnUserName(userProps)}
      </Text>
    </>
  );
};

export default UserNameText;
