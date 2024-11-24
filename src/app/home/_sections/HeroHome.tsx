"use client";

import webp from "@/_assets/webp";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";

export default function HeroHome() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    color: colors.secondaryYellow,
    fontSize: fonts.headingPrimary,
    lineHeight: fonts.headingPrimary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          height: "800px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: colors.primaryRed,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: { xs: "60vh", sm: "70vh" },
            width: "100%",
            position: "relative",
            padding: "0 30px",
          }}
        >
          <Typography
            data-aos="fade-left"
            data-aos-duration="1000"
            sx={{ ...headingStyles }}
          >
            taste the world
          </Typography>
          <Box
            sx={{
              height: { xs: "60%", sm: "70%" },
              width: " 100%",
              zIndex: "10",
              // marginY: "-50px",
            }}
          >
            <Image
              data-aos="zoom-out"
              data-aos-duration="1000"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                filter: `drop-shadow(2px 4px 8px ${colors.darkGrey})`,
                opacity: "100",
              }}
              src={webp.SmashBurger}
              alt="SmashBurger"
            />
          </Box>
          <Typography
            data-aos="fade-right"
            data-aos-duration="1000"
            sx={{ ...headingStyles, color: "#ffffff" }}
          >
            of flavour
          </Typography>
        </Box>
      </Box>
    </>
  );
}
