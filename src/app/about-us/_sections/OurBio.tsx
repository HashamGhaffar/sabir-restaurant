"use client";
import React, { useState } from "react";
import webp from "@/_assets/webp";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Grid, Typography, SxProps, Theme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
type BioData = {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string | StaticImageData;
  rowReverse?: boolean;
};

type OurBioSectionProps = {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string | StaticImageData;
  gridStyles?: SxProps<Theme>;
  rowReverse?: boolean;
};

export default function OurBio() {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  const setrowReverse = true;

  const bioData: BioData[] = [
    {
      title1: "Our Flavor",
      title2: "journey",
      description:
        "What started as a small dream turned into a vibrant dining experience, where each dish tells a story. With recipes inspired by global tastes and local traditions, we bring you flavors worth savoring. Thank you for being part of our journey!",
      imageSrc: webp.Flavour,
    },
    {
      title1: "A Taste of",
      title2: "Our Heritage",
      description:
        " Our restaurant is built on family recipes, love for the kitchen, and a passion for bold flavors. Every meal is made with care and a commitment to authenticity. Discover the food and story that make us who we are!",
      imageSrc: webp.Heritage,
      rowReverse: setrowReverse,
    },
    {
      title1: "The Heart Behind",
      title2: "every bite",
      description:
        "We’re more than just a restaurant—we’re a team of food lovers committed to quality and creativity. Our kitchen celebrates fresh ingredients, big flavors, and a dining experience that brings people together.",
      imageSrc: webp.TeamChef,
    },
  ];

  const gridStyles: SxProps<Theme> = {
    justifyContent: "space-between",
    rowGap: "40px",
    flexDirection: "row",
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "30px 20px 0 20px",
          sm: "50px 50px 0 50px",
          md: "48px 100px 0 100px",
          lg: "64px 150px 0 150px",
          xl: "80px 200px 0 200px",
        },
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url(bgAboutUs.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Box sx={{ maxWidth: "1600px", width: "100%" }}>
        {bioData.map((data, index) => (
          <OurBioSection
            key={index}
            title1={data.title1}
            title2={data.title2}
            description={data.description}
            imageSrc={data.imageSrc}
            gridStyles={gridStyles}
            rowReverse={data.rowReverse}
          />
        ))}
      </Box>
    </Box>
  );
}

export function OurBioSection({
  title1,
  title2,
  description,
  imageSrc,
  gridStyles,
  rowReverse = false,
}: OurBioSectionProps) {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);
  return (
    <Grid
      sx={{
        ...gridStyles,
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: { xs: "50px", sm: "80px", lg: "100px", xl: "120px" },
        flexDirection: rowReverse ? "row-reverse" : "row",
      }}
      container
      spacing={2}
    >
      <Grid
        data-aos="fade-right"
        data-aos-duration="1000"
        sx={{ textAlign: "left" }}
        item
        xs={12}
        sm={6}
      >
        <Typography
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          {title1}
        </Typography>
        <Typography
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          {title2}
        </Typography>
        <Typography
          sx={{
            fontSize: fonts.secondaryTypography,
            color: colors.obsidianGray,
            paddingTop: "20px",
          }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid
        data-aos="fade-left"
        data-aos-duration="1000"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={12}
        sm={5}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "350px", sm: "100%" },
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={imageSrc}
            alt="Flavour"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
