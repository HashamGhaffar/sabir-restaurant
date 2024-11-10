import React from "react";
import { TextField } from "@mui/material";
import { colors } from "@/app/utils/themes";

interface StandardInputProps {
  inputType?: string;
  label?: string;
}

const StandardInput: React.FC<StandardInputProps> = ({
  inputType = "text",
  label = "Enter text",
}) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      fullWidth
      type={inputType}
      sx={{
        width: "100%",
        "& .MuiInputBase-root": {
          color: colors.primaryRed,
        },
        "& .MuiInput-underline:before": {
          borderBottom: `1px solid ${colors.primaryRed}`,
        },
        "& .MuiInput-underline:after": {
          borderBottom: `2px solid ${colors.primaryRed}`,
        },
        "& .MuiInputLabel-root": {
          color: colors.primaryRed,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: colors.primaryRed,
        },
        "& .MuiInputBase-root.Mui-focused": {
          color: colors.primaryRed,
        },
        "& .MuiInput-underline.Mui-focused:after": {
          borderBottomColor: colors.primaryRed,
        },
      }}
    />
  );
};

export default StandardInput;
