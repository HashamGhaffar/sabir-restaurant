import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { colors, fonts } from "@/app/utils/themes";

const Button: React.FC<{
  children: React.ReactNode;
  styles?: ButtonProps["sx"];
}> = ({ children, styles = {} }) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        fontSize: fonts.tertiaryTypography,
        fontWeight: "400",
        color: colors.primaryRed,
        backgroundColor: colors.White,
        borderRadius: "4px",
        textTransform: "capitalize",
        padding: {
          xs: "10px 15px",
          sm: "10px 15px",
          lg: "15px 25px",
        },
        transition:
          "background-color 0.6s ease-in-out, color 0.3s ease-in, box-shadow 0.1s ease-in-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: colors.primaryRed,
          color: colors.White,
          boxShadow: `0px 0px 15px ${colors.smokeGray}`,
        },
        "&:active": {
          backgroundColor: "#e0e0e0",
        },
        ...styles,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
