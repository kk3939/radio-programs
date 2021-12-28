export type UserDoc = {
  name: string | null;
  photoUrl: string | null;
  // uidではなくidにしないと登録できない。
  id: string;
} & Radios;

export type Radios = {
  radios: Array<{
    index: number;
    name: string;
  }>;
};

export type UserState = UserDoc & {
  isEdit: boolean;
};

export type UserProps = UserDoc;
