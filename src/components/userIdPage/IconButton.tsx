import React from "react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Icon, Tooltip } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

type ButtonProps = {
  onclick: () => void;
};

export const CloseIconButton: React.VFC<ButtonProps> = ({ onclick }) => {
  return (
    <>
      <Tooltip
        label="close this edit page"
        aria-label="close button description"
      >
        <CloseIcon
          role="button"
          aria-label="close"
          w={5}
          h={5}
          color="blackAlpha.700"
          onClick={onclick}
        />
      </Tooltip>
    </>
  );
};

export const EditIconButton: React.VFC<ButtonProps> = ({ onclick }) => {
  return (
    <>
      <Tooltip label="edit your page" aria-label="edit Button description">
        <EditIcon
          role="button"
          aria-label="edit"
          w={6}
          h={6}
          color="blackAlpha.700"
          onClick={onclick}
        />
      </Tooltip>
    </>
  );
};

export const LogoutIconButton: React.VFC<ButtonProps> = ({ onclick }) => {
  return (
    <>
      <Icon
        as={FiLogOut}
        w={7}
        h={7}
        color="red.400"
        role="button"
        aria-label="logout"
        onClick={onclick}
      />
    </>
  );
};

export const SaveIconButton: React.VFC<ButtonProps> = ({ onclick }) => {
  return (
    <>
      <Tooltip label="save your input" aria-label="save button description">
        <CheckIcon
          role="button"
          aria-label="save"
          w={7}
          h={7}
          color="green.400"
          onClick={onclick}
        />
      </Tooltip>
    </>
  );
};
