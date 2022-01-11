import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { UserProps } from "../../types/global";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../redux/slice";
import { isEditable } from "../../functions/isEditable";

type Props = {
  userProps: UserProps;
};

const UserNameText: React.VFC<Props> = ({ userProps }) => {
  const dispatch = useDispatch();
  const userId: string = useSelector((state: RootState) => state.user.id);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  const userName: string | null = useSelector(
    (state: RootState) => state.user.name
  );

  const returnUserNameFromProps = (arg: UserProps): string => {
    if (arg.name === null) {
      return "This user's name isn't setup.";
    }
    return arg.name;
  };
  const returnUserNameFromState = (arg: string | null): string => {
    if (arg === null) {
      return "This user's name isn't setup.";
    }
    return arg;
  };
  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <Box mt={3} mb={3} w="40%">
          <Input
            placeholder={returnUserNameFromProps(userProps)}
            value={returnUserNameFromState(userName)}
            onChange={(event) =>
              dispatch(userSlice.actions.updateUserName(event.target.value))
            }
          />
        </Box>
      ) : (
        <Text fontSize="lg" fontWeight="bold" p={3}>
          {returnUserNameFromProps(userProps)}
        </Text>
      )}
    </>
  );
};

export default UserNameText;
