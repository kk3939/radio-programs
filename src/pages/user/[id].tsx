import React from "react";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div />;
};

export default UserPage;
