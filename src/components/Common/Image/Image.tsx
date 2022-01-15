import React from "react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { ImageProps } from "../../../types/global";

const Image: React.VFC<ImageProps> = ({ borderRadius, boxSize, src, alt }) => {
  return (
    <ChakraImage
      borderRadius={borderRadius}
      src={src}
      boxSize={boxSize}
      alt={alt}
    />
  );
};

export default Image;
