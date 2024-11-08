"use client";
import svgs from "@/_assets/svgs";
import { fonts, colors } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Footer = () => {
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
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(footerLogo.webp)",
          backgroundPosition: "center center",
          backgroundSize: "contain",
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
              maxWidth: { sm: "200px", md: "250px", lg: "340px", xl: "400px" },
              width: "100%",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
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
              <Typography sx={{ ...textStyles }}>Home</Typography>
              <Typography sx={{ ...textStyles }}>About Us</Typography>
              <Typography sx={{ ...textStyles }}>Our Food</Typography>
              <Typography sx={{ ...textStyles }}>Order</Typography>
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
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
    </>
  );
};

export default Footer;
