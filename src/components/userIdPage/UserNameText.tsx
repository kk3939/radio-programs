import React from "react";
import { Input, Text } from "@chakra-ui/react";
import { UserProps } from "../../types/global";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../redux/slice";

type Props = {
  userProps: UserProps;
};

const UserNameText: React.VFC<Props> = ({ userProps }) => {
  const dispatch = useDispatch();
  const userId: string = useSelector((state: RootState) => state.user.id);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  const returnUserName = (arg: UserProps): string => {
    if (arg.name === null) {
      return "This user's name isn't setup.";
    }
    return arg.name;
  };
  return (
    <>
      {isEdit && userProps.id === userId ? (
        <Input
          value={returnUserName(userProps)}
          onChange={(event) =>
            dispatch(userSlice.actions.updateUserName(event.target.value))
          }
        />
      ) : (
        <Text fontSize="lg" fontWeight="bold" p={3}>
          {returnUserName(userProps)}
        </Text>
      )}
    </>
  );
};

export default UserNameText;
