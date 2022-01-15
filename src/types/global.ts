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

export type IconButtonProps = {
  onClick: () => void;
};

export type NormalButtonProps = {
  onClick: () => void;
  text: string;
};

export type TextProps = {
  fontSize: string | object;
  color: string;
  text: string;
  pt?: `${string}px` | number;
  pr?: `${string}px` | number;
  pb?: `${string}px` | number;
  pl?: `${string}px` | number;
};

export type ImageProps = {
  borderRadius: string;
  src: string;
  boxSize: string;
  alt: string;
};
