export type UserDoc = {
  name: string | null;
  photoUrl: string | null;
  // uidではなくidにしないと登録できない。
  id: string;
} & Radios;

export type Radios = {
  radios: Array<{
    id: string;
    name: string;
  }>;
};
