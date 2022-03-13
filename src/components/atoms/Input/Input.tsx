import { Input as MuiInput, InputProps } from "@mui/material";
import { forwardRef } from "react";

type Props = InputProps;

export const Input = forwardRef<Props, "input">((props, ref) => {
  return <MuiInput ref={ref} {...props} />;
});
