import React, { FC, useState } from "react";
import { Field, FormikProps } from "formik";
import { Flex } from "@chakra-ui/react";
import { chakraUiTheme } from "@/utils/theme";

interface Props {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
}
const FormikInput: FC<Props> = ({ id, name, type, placeholder }) => {
  const [isFocusted, setIsFocussed] = useState(false);
  return (
    <Flex
      outline={
        isFocusted
          ? `1px solid ${chakraUiTheme.colors.secondary}`
          : `1px solid ${chakraUiTheme.colors.primary}`
      }
      borderRadius={"4px"}
      padding={"6px 8px"}
      transition={"outline 0.3s"}
    >
      <Field
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
          border: "none",
        }}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={() => {
          setIsFocussed(false);
        }}
      />
    </Flex>
  );
};

export default FormikInput;
