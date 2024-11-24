import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Button from "@/_components/Button";
import MapComponent from "@/_components/Map";
import { fonts, colors } from "@/app/utils/themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Orderbody() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 10000, once: true });
    AOS.refresh();
  }, []);

  const headingStyles = {
    fontSize: fonts.headingSecondary,
    lineHeight: fonts.headingSecondary,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: '"Bebas Neue", sans-serif',
  };

  return (
    <>
      <Box
        sx={{
          padding: { xs: "40px 20px", sm: "50px 80px", md: "100px 80px" },
          backgroundImage: "url(worldMap.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.primaryRed,
          }}
        >
          Order Now
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Feast Later
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            sx={{
              maxWidth: "1600px",
              gap: { lg: "100px", xl: "200px" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
            container
          >
            <LocationCard
              address="36 Westgate, Rotherham S60 1AS, United Kingdom"
              phoneNumber="+44 1709 838899"
            />
            <LocationCard
              address="Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF"
              phoneNumber="01484 244111"
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

interface LocationCardProps {
  address: string;
  phoneNumber: string;
}

function LocationCard({ address, phoneNumber }: LocationCardProps) {
  return (
    <Grid
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      item
      xs={12}
      lg={5}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: { xs: "40px", sm: "50px", md: "100px" },
      }}
    >
      <Box>
        <Box
          sx={{
            height: { xs: "400px", md: "500px", lg: "600px", xl: "700px" },
            width: "100%",
          }}
        >
          <MapComponent lat={0} lng={0} />
        </Box>
        <Box
          sx={{
            backgroundColor: colors.primaryRed,
            padding: "30px",
            color: colors.White,
            display: "flex",
            justifyContent: "space-between",
            alignItems: { sx: "flex-start", sm: "center" },
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography>{address}</Typography>
            <Typography>{phoneNumber}</Typography>
          </Box>
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
    </Grid>
  );
}
