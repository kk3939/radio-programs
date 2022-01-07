import React from "react";
import { UserProps } from "../../../types/global";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import Radio from "./Radio";
import { isEditable } from "../../../functions/isEditable";

type Props = {
  userProps: UserProps;
};

const Radios: React.VFC<Props> = ({ userProps }) => {
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);
  const userId: string = useSelector((state: RootState) => state.user.id);
  const radios = useSelector((state: RootState) => state.user.radios);
  return (
    <>
      {isEditable(isEdit, userProps, userId)
        ? radios.map((radio, i) => (
            <Radio userProps={userProps} i={i} radio={radio} key={i} />
          ))
        : userProps.radios.map((radio, i) => (
            <Radio userProps={userProps} i={i} radio={radio} key={i} />
          ))}
    </>
  );
};

export default Radios;
