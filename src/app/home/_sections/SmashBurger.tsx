"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import NextMeal from "../_components/NextMeal";
import Button from "@/_components/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SmashBurger() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  return (
    <Box
      sx={{
        backgroundImage: "url(bgSmashBurgers.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NextMeal />
      <Box
        sx={{
          minHeight: "100vh",
          height: { lg: "1000px" },
          display: "flex",
          justifyContent: { xs: "flex-end", xl: "center" },
          alignItems: "center",
          padding: {
            xs: "80px 20px",
            md: "150px 60px",
            lg: "200px 100px",
            xl: "300px 150px",
          },
        }}
      >
        <Box
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          sx={{
            maxWidth: "800px",
            backgroundColor: "#000000CC",
            padding: { xs: "20px", sm: "40px" },
            textAlign: "right",
          }}
        >
          <Typography sx={{ ...headingStyles, color: colors.secondaryYellow }}>
            Smash Burgers:
          </Typography>
          <Typography sx={{ ...headingStyles, color: colors.White }}>
            Bold, Juicy, Irresistible
          </Typography>
          <Typography
            sx={{
              color: colors.White,
              fontSize: fonts.secondaryTypography,
              lineHeight: fonts.secondaryTypography,
              marginTop: { xs: "10px", xl: "24px" },
            }}
          >
            Our smash burgers are seared to perfection, delivering that
            mouthwatering, crispy edge with a tender, juicy center. Made from
            high-quality, seasoned beef and topped with fresh ingredients, each
            bite is an explosion of flavor. Perfectly stacked and packed with
            taste, these burgers are crafted for serious burger lovers!
          </Typography>
          <Box sx={{ marginTop: { xs: "20px", xl: "40px" } }}>
            <Button>Order Now</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
