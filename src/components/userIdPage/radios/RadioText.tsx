import React from "react";
import { Input } from "@chakra-ui/react";
import { Text } from "../../Common/Text/Text";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../../types/global";
import { userSlice } from "../../../redux/slice";
import { isEditable } from "../../../functions/isEditable";

type Props = {
  radio: {
    index: number;
    name: string;
  };
  userProps: UserProps;
  i: number;
};

const RadioText: React.VFC<Props> = ({ radio, userProps, i }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.id);
  const isEdit = useSelector((state: RootState) => state.user.isEdit);
  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <Input
          bg="white"
          placeholder={radio.name}
          value={radio.name}
          onChange={(event) =>
            dispatch(
              userSlice.actions.updateRadioName({
                index: i,
                radioName: event.target.value,
              })
            )
          }
        />
      ) : (
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          text={radio.name}
          color="black"
        />
      )}
    </>
  );
};

export default RadioText;
