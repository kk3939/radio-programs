import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserProps } from "../../../types/global";
import { userSlice } from "../../../redux/slice";
import { isEditable } from "../../../functions/isEditable";
import {
  AddIconButton,
  DeleteIconButton,
} from "../../Common/Buttons/IconButton";
import { addRadio, deleteRadio } from "../../../functions/radioDispatch";
type Props = {
  userProps: UserProps;
  i: number;
};

const ButtonsInRadio: React.VFC<Props> = ({ userProps, i }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector((state: RootState) => state.user.isEdit);
  const userId = useSelector((state: RootState) => state.user.id);
  const radios = useSelector((state: RootState) => state.user.radios);

  return (
    <>
      {isEditable(isEdit, userProps, userId) ? (
        <>
          <Box pl={20} pr={5}>
            <AddIconButton
              onClick={() =>
                addRadio(
                  radios,
                  dispatch,
                  userSlice.actions.addRadio({ index: i })
                )
              }
            />
          </Box>
          <Box pl={5} pr={10}>
            <DeleteIconButton
              onClick={() =>
                deleteRadio(
                  radios,
                  dispatch,
                  userSlice.actions.deleteRadio({ index: i })
                )
              }
            />
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonsInRadio;
