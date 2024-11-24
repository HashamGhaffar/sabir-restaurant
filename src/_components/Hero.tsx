"use client";
import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  headingText: string; // Define the prop for heading text
}

export default function Hero({ headingText }: HeroProps) {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

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
        <Box
          sx={{
            position: "absolute",
            top: { xs: "45%", sm: "38%", lg: "50%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            data-aos="zoom-out"
            data-aos-duration="1000"
            sx={{
              ...headingStyles,
              textWrap: "nowrap",
            }}
          >
            {headingText}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            bottom: "-10px",
            width: { xs: "350px", sm: "500px", lg: "560px", xl: "600px" },
          }}
        >
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={webp.HeroBurger}
            alt="HeroBurger"
          />
        </Box>
      </Box>
    </>
  );
}
