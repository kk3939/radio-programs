import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserProps } from "../../../types/global";
import { userSlice } from "../../../redux/slice";
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
      {isEdit && userProps.id === userId ? (
        <>
          <Box pl={20} pr={5}>
            <Tooltip
              label="add a new radio"
              aria-label="add button description"
            >
              <AddIcon
                role="button"
                aria-label="add radio"
                w={5}
                h={5}
                color="blackAlpha.700"
                onClick={() => {
                  if (radios.length === 20) {
                    alert("Sorry, radio's limits is 20.");
                    return;
                  }
                  dispatch(userSlice.actions.addRadio({ index: i }));
                }}
              />
            </Tooltip>
          </Box>
          <Box pl={5} pr={10}>
            <Tooltip
              label="delete this radio"
              aria-label="delete button description"
            >
              <MinusIcon
                role="button"
                aria-label="add radio"
                w={5}
                h={5}
                color="blackAlpha.700"
                onClick={() => {
                  if (radios.length === 1) {
                    alert("Radio's minimum value is 1. ");
                    return;
                  }
                  dispatch(userSlice.actions.deleteRadio({ index: i }));
                }}
              />
            </Tooltip>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonsInRadio;
