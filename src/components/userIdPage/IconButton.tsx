import React from "react";
import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import { Icon, Tooltip } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

type ButtonProps = {
  onClick: () => void;
};

export const CloseIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
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
          onClick={onClick}
        />
      </Tooltip>
    </>
  );
};

export const EditIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="edit your page" aria-label="edit Button description">
        <EditIcon
          role="button"
          aria-label="edit"
          w={6}
          h={6}
          color="blackAlpha.700"
          onClick={onClick}
        />
      </Tooltip>
    </>
  );
};

export const LogoutIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <Icon
        as={FiLogOut}
        w={7}
        h={7}
        color="red.400"
        role="button"
        aria-label="logout"
        onClick={onClick}
      />
    </>
  );
};

export const SaveIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="save your input" aria-label="save button description">
        <CheckIcon
          role="button"
          aria-label="save"
          w={7}
          h={7}
          color="green.400"
          onClick={onClick}
        />
      </Tooltip>
    </>
  );
};

export const AddIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="add a new radio" aria-label="add button description">
        <AddIcon
          role="button"
          aria-label="add radio"
          w={5}
          h={5}
          color="blackAlpha.700"
          onClick={onClick}
        />
      </Tooltip>
    </>
  );
};

export const DeleteIconButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="delete this radio" aria-label="delete button description">
        <MinusIcon
          role="button"
          aria-label="add radio"
          w={5}
          h={5}
          color="blackAlpha.700"
          onClick={onClick}
        />
      </Tooltip>
    </>
  );
};
