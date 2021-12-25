import { User } from "firebase/auth";

export type UserDoc = Pick<User, "displayName" | "photoURL" | "uid"> & {
  radios: Array<{
    id: string;
    name: string;
  }>;
};
