import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/_assets/webp";
import { fonts, colors } from "@/app/utils/themes";

export default function NextMealSlider() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: { xs: "10px", sm: "15px" },
      }}
    >
      <Box
        sx={{
          height: { xs: "300px", sm: "315px", lg: "380px" },
          width: { xs: "300px", sm: "315px", lg: "380px" },
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={webp.CarouselChickenBurger}
          alt="CarouselChickenBurger"
        />
      </Box>
      <Typography
        sx={{
          fontSize: fonts.tertiaryTypography,
          color: colors.primaryRed,
        }}
      >
        Hot & Spicy Chicken Burger
      </Typography>
    </Box>
  );
}
