import { UserProps } from "../types/global";

export const returnUserNameFromProps = (arg: UserProps): string => {
  if (arg.name === null) {
    return "This user's name isn't setup.";
  }
  return arg.name;
};

export const returnUserNameFromState = (arg: string | null): string => {
  if (arg === null) {
    return "This user's name isn't setup.";
  }
  return arg;
};

export const returnPhotoUrl = (arg: UserProps): string | undefined => {
  if (arg.photoUrl === null) {
    return undefined;
  }
  return arg.photoUrl;
};
