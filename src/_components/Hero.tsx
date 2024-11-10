"use client";

import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";

interface HeroProps {
  headingText: string; // Define the prop for heading text
}

export default function Hero({ headingText }: HeroProps) {
  const headingStyles = {
    color: colors.White,
    fontSize: fonts.headingPrimary,
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: "40vh", sm: "50vh" },
          position: "relative",
          overflow: "hidden",
          backgroundColor: colors.primaryRed,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            ...headingStyles,
            position: "absolute",
            top: { xs: "45%", sm: "38%", lg: "50%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            textWrap: "nowrap",
          }}
        >
          {headingText}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            bottom: "-10px",
            width: { xs: "350px", sm: "500px", lg: "560px", xl: "600px" },
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={webp.HeroBurger}
            alt="HeroBurger"
          />
        </Box>
      </Box>
    </>
  );
}
