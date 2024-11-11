"use client";

import MapComponent from "@/_components/Map";
import { colors, fonts } from "@/app/utils/themes";
import { Box, Button, Typography } from "@mui/material";

export default function Location() {
  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    fontFamily: '"Bebas Neue", sans-serif',
    textAlign: "center",
  };
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          md: "80px 40px",
          lg: "130px 80px",
        },
        backgroundImage: "url(bgLocation.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* hedding  */}
      <Typography
        sx={{
          ...headingStyles,
          color: colors.secondaryYellow,
        }}
      >
        Come Find Your
      </Typography>
      <Typography
        sx={{
          ...headingStyles,
          color: colors.White,
        }}
      >
        next meal
      </Typography>
      <Box
        sx={{
          paddingTop: {
            xs: "40px",
            md: "80px",
            lg: "130px",
          },
        }}
      >
        {/* Add the slider with menu items */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                xl: "space-around",
              },
              flexDirection: { sm: "row", xs: "column" },
              gap: { lg: "", md: "40px", sm: "20px", xs: "30px" },
              maxWidth: "1600px",
              width: "100%",
            }}
          >
            <LocationCard
              address={"36 Westgate, Rotherham S60 1AS, United Kingdom"}
              number={"+44 1709 838899"}
              lat={53.4321}
              lng={-1.35746}
            />
            <LocationCard
              address={
                "Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF"
              }
              number={"01484 244111"}
              lat={53.65738}
              lng={-1.78314}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CardProps {
  address: string;
  number: string;
  lat: number;
  lng: number;
}

const LocationCard: React.FC<CardProps> = ({ address, number, lat, lng }) => {
  const textStyle = {
    fontSize: fonts.secondaryTypography,
    color: colors.White,
  };
  return (
    <Box
      sx={{
        maxWidth: {
          xl: "530px",
          lg: "450px",
          md: "380px",
          sm: "250px",
          xs: "100%",
        },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { lg: "600px", md: "500px", sm: "400px", xs: "400px" },
        }}
      >
        <MapComponent lat={lat} lng={lng} />
      </Box>
      <Box
        sx={{
          padding: "20px",
          textAlign: "left",
          backgroundColor: colors.black,
        }}
      >
        <Typography sx={{ ...textStyle }}>{address}</Typography>
        <Typography
          sx={{
            ...textStyle,
            marginTop: { xs: "10px", md: "25px", xl: "32px" },
          }}
        >
          {number}
        </Typography>
      </Box>
    </Box>
  );
};
