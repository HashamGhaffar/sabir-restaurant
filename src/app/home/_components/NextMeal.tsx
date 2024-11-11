"use client";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "@/app/utils/themes";
import Button from "@/_components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextMealSlider from "./NextMealSlider";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";

export default function NextMeal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primaryRed,
        backgroundImage: "url(bgNextMeal.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        padding: {
          xs: "60px 20px",
          md: "100px 60px",
          lg: "100px 150px 100px 100px",
          xl: "100px 150px",
        },
        borderRadius: { xs: "0", sm: "0 0 40px 40px", md: "0 0 80px 80px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: "50px", sm: "80px", lg: "120px", xl: "200px" },
          maxWidth: "1300px",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <Typography sx={{ ...headingStyles, color: colors.secondaryYellow }}>
            Come Find Your
          </Typography>
          <Typography sx={{ ...headingStyles, color: colors.White }}>
            next meal
          </Typography>
          <Typography
            sx={{
              color: colors.White,
              fontSize: fonts.secondaryTypography,
              lineHeight: fonts.secondaryTypography,
              marginTop: { xs: "10px", xl: "24px" },
            }}
          >
            Discover a menu crafted to satisfy every craving! Dive into our
            range of signature dishes, seasonal specials, and classic
            favorites—all made to order just for you. Take a look and let your
            taste buds lead the way!"
          </Typography>
          <Box sx={{ marginTop: { xs: "20px", xl: "40px" } }}>
            <Button
              styles={{
                "&:hover": {
                  backgroundColor: colors.secondaryYellow,
                },
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
        {/* Slider with cards */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              height: { xs: "370px", sm: "370px", lg: "450px" },
              width: { xs: "320px", sm: "340px", lg: "410px" },
              backgroundColor: colors.White,
              borderRadius: "30px",
              position: "relative",
              zIndex: "30",
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
            }}
          >
            <Slider {...settings}>
              <NextMealSlider />
              <NextMealSlider />
            </Slider>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "20",
              height: "100%",
              width: "100%",
              backgroundColor: colors.secondaryYellow,
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
              transform: "rotate(-5deg)",
              borderRadius: "30px",
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "10",
              height: "100%",
              width: "100%",
              backgroundColor: colors.White,
              boxShadow: `-3px 4px 8px ${colors.smokeGray}`,
              transform: "rotate(-13deg)",
              borderRadius: "30px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
