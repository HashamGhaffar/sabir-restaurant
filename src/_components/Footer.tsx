"use client";
import svgs from "@/_assets/svgs";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

interface FooterProps {
  applyBorderTop?: boolean;
}

const Footer = ({ applyBorderTop = true }: FooterProps) => {
  const router = useRouter();

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    color: colors.primaryRed,
    textTransform: "uppercase",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  const textStyles = {
    color: colors.smokeGray,
    textTransform: "capitalize",
    fontSize: fonts.tertiaryTypography,
    lineHeight: fonts.tertiaryTypography,
    cursor: "pointer",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.6s ease-in-out , scale .3s ease-in-out",
    "&:hover": {
      color: colors.primaryRed,
      textShadow: `1px 3px 4px ${colors.smokeGray}`,
      scale: "1.1",
    },
  };

  return (
    <>
      <Box
        sx={{
          borderTop: applyBorderTop
            ? {
                xs: `4px solid ${colors.secondaryYellow}`,
                md: `6px solid ${colors.secondaryYellow}`,
                xl: `10px solid ${colors.secondaryYellow}`,
              }
            : "none",
        }}
      >
        <Box
          sx={{
            borderTop: applyBorderTop
              ? {
                  xs: `4px solid ${colors.darkGrey}`,
                  md: `6px solid ${colors.darkGrey}`,
                  xl: `10px solid ${colors.darkGrey}`,
                }
              : "none",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(footerLogo.webp)",
              backgroundPosition: "center center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              margin: {
                xs: "40px 30px",
                sm: "30px 50px",
                md: "40px 100px",
                lg: "60px 150px",
                xl: "60px 200px",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "1400px",
                display: "flex",
                justifyContent: { xs: "space-between" },
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                gap: "50px",
                alignItems: { xs: "center", sm: "inherit" },
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    sm: "200px",
                    md: "250px",
                    lg: "340px",
                    xl: "400px",
                  },
                  width: "100%",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Image
                  onClick={() => router.push("home")}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  src={svgs.Logo}
                  alt="logo"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: { xs: "20px", sm: "30px", lg: "40px" },
                }}
              >
                <Typography
                  sx={{
                    ...headingStyles,
                    textAlign: { xs: "center ", sm: "inherit" },
                  }}
                >
                  quick links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    gap: { xs: "14px", md: "10px", lg: "15px" },
                    flexDirection: { xs: "row", sm: "column" },
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("home")}
                  >
                    Home
                  </Typography>
                  <Typography
                    onClick={() => router.push("about-us")}
                    sx={{ ...textStyles }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("our-food")}
                  >
                    Our Food
                  </Typography>
                  <Typography
                    sx={{ ...textStyles }}
                    onClick={() => router.push("order")}
                  >
                    Order
                  </Typography>
                  <Typography sx={{ ...textStyles }}>Contact</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: { xs: "20px", sm: "30px", lg: "40px" },
                }}
              >
                <Typography
                  sx={{
                    ...headingStyles,
                    textAlign: { xs: "center ", sm: "inherit" },
                  }}
                >
                  Follow
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: { xs: "14px", md: "10px", lg: "15px" },
                    flexDirection: { xs: "row", sm: "column" },
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      ...textStyles,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Facebook
                  </Typography>
                  <Typography
                    sx={{
                      ...textStyles,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Instagram
                  </Typography>
                  <Box
                    sx={{
                      display: {
                        xs: "flex",
                        sm: "none",
                      },
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                    >
                      <Image
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                        src={svgs.Facebook}
                        alt="facebook"
                      />
                      <Typography sx={{ ...textStyles, opacity: "1" }}>
                        Facebook
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                    >
                      <Image
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                        src={svgs.Instagram}
                        alt="instagram"
                      />
                      <Typography sx={{ ...textStyles, opacity: "1" }}>
                        Instagram
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
