import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserProps } from "../../../types/global";
import { userSlice } from "../../../redux/slice";
import { isEditable } from "../../../functions/isEditable";
import { AddIconButton, DeleteIconButton } from "../IconButton";
type Props = {
  userProps: UserProps;
  i: number;
};

const ButtonsInRadio: React.VFC<Props> = ({ userProps, i }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector((state: RootState) => state.user.isEdit);
  const userId = useSelector((state: RootState) => state.user.id);
  const radios = useSelector((state: RootState) => state.user.radios);

  const addRadio = () => {
    if (radios.length === 20) {
      alert("Sorry, radio's limits is 20.");
      return;
    }
    dispatch(userSlice.actions.addRadio({ index: i }));
  };

  const deleteRadio = () => {
    if (radios.length === 1) {
      alert("Radio's minimum value is 1. ");
      return;
    }
    dispatch(userSlice.actions.deleteRadio({ index: i }));
  };

  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <>
          <Box pl={20} pr={5}>
            <AddIconButton onClick={() => addRadio()} />
          </Box>
          <Box pl={5} pr={10}>
            <DeleteIconButton onClick={() => deleteRadio()} />
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonsInRadio;
