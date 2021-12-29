import React from "react";
import { Input, Text } from "@chakra-ui/react";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../../types/global";
import { userSlice } from "../../../redux/slice";

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
      {isEdit && userProps.id === userId ? (
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
        <Text fontSize="2xl" fontWeight="bold">
          {radio.name}
        </Text>
      )}
    </>
  );
};

export default RadioText;
