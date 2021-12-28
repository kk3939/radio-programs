import React from "react";
import { Image } from "@chakra-ui/react";
import { UserProps } from "../../types/global";

type Props = {
  userProps: UserProps;
};

const ProfileImage: React.VFC<Props> = ({ userProps }) => {
  const returnPhotoUrl = (arg: UserProps): string | undefined => {
    if (arg.photoUrl === null) {
      return undefined;
    }
    return arg.photoUrl;
  };

  return (
    <>
      <Image
        borderRadius="full"
        boxSize="100px"
        src={returnPhotoUrl(userProps)}
        alt="user"
        mt={5}
      />
    </>
  );
};

export default ProfileImage;
