"use client";
import { Box, Divider, Typography } from "@mui/material";
import StandardInput from "../../../_components/Input";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { colors, fonts } from "@/app/utils/themes";
import Button from "@/_components/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SectionContactUs() {
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
          Reach Out for
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            ...headingStyles,
            color: colors.secondaryYellow,
          }}
        >
          Flavorful Experiences
        </Typography>

        <Box
          sx={{
            paddingTop: { xs: "40px", sm: "50px", md: "100px" },
            position: "relative",
          }}
        >
          {/* form && contact card */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              gap: { xs: "50px", md: "60px", lg: "100px" },
            }}
          >
            <Box
              data-aos="fade-up-right"
              data-aos-duration="1000"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: { xs: "100%", lg: "625px" },
                minWidth: { lg: "526px" },
                gap: {
                  xs: "30px",
                  sm: "50px",
                  md: "60px",
                  lg: "80px",
                  xl: "100px",
                },
              }}
            >
              {/* typography  */}
              <Typography
                sx={{
                  color: colors.primaryRed,
                  fontSize: "16px",
                  fontWeight: "400",
                  textAlign: "left",
                  maxWidth: "500px",
                }}
              >
                We’re here to make your experience unforgettable. Whether you
                have a question, want to make a reservation, or just want to say
                hi, drop us a line! Our team is ready to serve you.
              </Typography>
              {/* inputs  */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "30px",
                    paddingBottom: "50px",
                  }}
                >
                  <StandardInput inputType="text" label="Name" />
                  <StandardInput inputType="email" label="Email" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "30px",
                  }}
                >
                  <StandardInput inputType="number" label="Phone" />
                  <StandardInput inputType="text" label="Subject" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "30px",
                    paddingTop: "80px",
                  }}
                >
                  <StandardInput inputType="text" label="Message" />
                </Box>
              </Box>
              {/* button  */}
              <Box sx={{ paddingTop: { xs: "80px", lg: "0" } }}>
                <Button
                  styles={{
                    color: colors.White,
                    backgroundColor: colors.primaryRed,
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Box>
            <Box
              data-aos="fade-up-left"
              data-aos-duration="1000"
              sx={{
                maxWidth: { xs: "100%", lg: "550px" },
                minWidth: { lg: "480px" },
              }}
            >
              <CardContactUs />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function CardContactUs() {
  const contactCardText = {
    fontSize: fonts.tertiaryTypography,
    color: colors.White,
  };

  return (
    <>
      <Box
        sx={{
          maxwidth: { xs: "400px", xl: "450px" },
          padding: { xs: "20px 30px 0 30px" },
          textAlign: "left",
          backgroundColor: colors.primaryRed,
        }}
      >
        <Typography sx={{ ...contactCardText }}>
          Reach out to us for prompt assistance. We're just a message away,
          dedicated to ensuring your dining is seamless and enjoyable.s
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", sm: "30px", md: "50px" },
            paddingY: { xs: "20px", sm: "30px", md: "50px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Location}
              alt="location logo"
            />
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontWeight: "700",
                }}
              >
                Location
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                36 Westgate, Rotherham S60 1AS, United Kingdom
              </Typography>
              <Typography sx={{ ...contactCardText }}>
                +44 1709 838899
              </Typography>
              <Divider
                sx={{
                  margin: "20px 0",
                  backgroundColor: colors.White,
                  width: "100%",
                  height: "1px",
                }}
              />
              <Typography sx={{ ...contactCardText }}>
                Unit 1 A, The gateway retail park, Hillhouse lane, HD1 6EF
              </Typography>
              <Typography sx={{ ...contactCardText }}>01484 244111</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: { xs: "20px", sm: "25px", md: "30px" },
            }}
          >
            <Image
              style={{ width: "40px", height: "auto" }}
              src={svgs.Email}
              alt="location logo"
            />
            <Box>
              <Typography
                sx={{
                  ...contactCardText,
                  fontWeight: "700",
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  ...contactCardText,
                }}
              >
                info@sabirsgrill.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
