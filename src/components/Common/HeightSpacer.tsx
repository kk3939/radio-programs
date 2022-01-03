import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  spacePixel: string | object;
};

const HeightSpacer: React.VFC<Props> = ({ spacePixel }) => {
  return <Box h={spacePixel} />;
};

export default HeightSpacer;
