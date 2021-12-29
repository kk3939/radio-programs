import { CheckIcon } from "@chakra-ui/icons";
import { Tooltip, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { updateFirestoreData } from "../../functions/updateFirestoreData";
import { RootState } from "../../redux/store";
import { UserState } from "../../types/global";

const SaveIconButton: React.VFC = () => {
  const router = useRouter();
  const toast = useToast();
  const user: UserState = useSelector((state: RootState) => state.user);
  return (
    <>
      <Tooltip label="save your input" aria-label="save button description">
        <CheckIcon
          role="button"
          aria-label="save"
          w={7}
          h={7}
          color="green.400"
          onClick={() => updateFirestoreData(user, toast, router)}
        />
      </Tooltip>
    </>
  );
};

export default SaveIconButton;
