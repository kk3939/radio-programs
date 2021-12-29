import { useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { NextRouter } from "next/router";
import { db } from "../../firebase";
import { UserState } from "../types/global";

export const updateFireStoreData = async (
  userState: UserState,
  toast: ReturnType<typeof useToast>,
  router: NextRouter
): Promise<void> => {
  // isEditを切り離して、stateをimmutableにUserDocの形にする。
  const { isEdit, ...userDoc } = userState;
  try {
    await setDoc(doc(db, "users", userState.id), userDoc);
    router.reload();
  } catch (error) {
    console.log(error);
    toast({
      position: "top",
      title: "Can't set your data.",
      description: `It occurs some problems.`,
      status: "error",
      duration: 8000,
      isClosable: true,
    });
  }
};
