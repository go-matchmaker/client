import React, { FC, FocusEvent, ReactElement } from "react";
import { Field } from "formik";
import { Flex } from "@chakra-ui/react";
import { chakraUiTheme } from "@/utils/theme";

interface Props {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  leftIcon?: ReactElement<any, any>;
  onFocus?: (e?: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e?: FocusEvent<HTMLInputElement>) => void;
}
const FormikInput: FC<Props> = ({
  id,
  name,
  type,
  placeholder,
  leftIcon,
  onFocus,
  onBlur,
}) => {
  const [isFocussed, setIsFocussed] = React.useState(false);
  return (
    <Flex
      outline={
        isFocussed
          ? `1px solid ${chakraUiTheme.colors.secondary}`
          : `1px solid ${chakraUiTheme.colors.primary}`
      }
      borderRadius={"4px"}
      padding={{ base: "4px 6px", md: "6px 8px" }}
      gap={"8px"}
      alignItems={"center"}
      transition={"outline 0.3s"}
    >
      {leftIcon && leftIcon}
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
        onFocus={(
          e: React.FocusEvent<HTMLInputElement, Element> | undefined
        ) => {
          setIsFocussed(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={(
          e: React.FocusEvent<HTMLInputElement, Element> | undefined
        ) => {
          setIsFocussed(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
      />
    </Flex>
  );
};

export default FormikInput;
