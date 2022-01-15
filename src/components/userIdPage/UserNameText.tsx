import React from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "../Common/Text/Text";
import { UserProps } from "../../types/global";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../redux/slice";
import { isEditable } from "../../functions/isEditable";
import Input from "../Common/Input/Input";
import {
  returnUserNameFromProps,
  returnUserNameFromState,
} from "../../functions/validation";

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
        <Text
          fontSize="lg"
          pt={3}
          pr={3}
          pl={3}
          pb={3}
          text={returnUserNameFromProps(userProps)}
          color="black"
        />
      )}
    </>
  );
};

export default UserNameText;
