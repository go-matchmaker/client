import React, { FC } from "react";
import { Input, InputProps } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props extends InputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  type?: React.HTMLInputTypeAttribute;
}

const RHFInput: FC<Props> = ({ name, register, type, ...props }) => {
  return <Input {...props} id={name} {...register(name)} type={type} />;
};

export default RHFInput;
