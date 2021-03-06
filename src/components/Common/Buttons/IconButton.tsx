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
import { IconButtonProps } from "../../../types/global";

export const CloseIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="close this edit page">
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

export const EditIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="edit your page">
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

export const LogoutIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
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

export const SaveIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="save your input">
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

export const AddIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
  return (
    <>
      <Tooltip label="add a new radio">
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

export const DeleteIconButton: React.VFC<IconButtonProps> = ({ onClick }) => {
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
