import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserProps } from "../../../types/global";

type Props = {
  userProps: UserProps;
};

const ButtonsInRadio: React.VFC<Props> = ({ userProps }) => {
  const isEdit = useSelector((state: RootState) => state.user.isEdit);
  const userId = useSelector((state: RootState) => state.user.id);
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
