import { UserProps } from "../types/global";

export const returnUserNameFromProps = (arg: string | null): string => {
  if (arg === null) {
    return "This user's name isn't setup.";
  }
  return arg;
};

export const returnUserNameFromState = returnUserNameFromProps;

export const returnPhotoUrl = (arg: string | null): string | undefined => {
  if (arg === null) {
    return undefined;
  }
  return arg;
};
