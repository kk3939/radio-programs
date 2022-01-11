import { UserProps } from "../types/global";

export const isEditable = (
  isEdit: boolean,
  userProps: UserProps,
  userId: string
) => {
  if (isEdit && userProps.id === userId) {
    return true;
  }
  return false;
};
