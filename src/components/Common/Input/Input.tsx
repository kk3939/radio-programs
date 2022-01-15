import React from "react";
import { InputProps } from "../../../types/global";
import { Input as ChakraInput } from "@chakra-ui/react";

const Input: React.VFC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <ChakraInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
