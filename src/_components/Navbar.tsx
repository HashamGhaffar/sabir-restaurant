"use client";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Divider } from "@mui/material";
import { colors, fonts } from "@/app/utils/themes";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // dropdown code
  const [open, setOpen] = useState(false);
  const openDropdown = () => {
    setOpen(true);
  };
  const closeDropdown = () => {
    setOpen(false);
  };
  const textStyle = {
    fontSize: fonts.tertiaryTypography,
    fontWeight: "400",
    color: colors.smokeGray,
    cursor: "pointer",
    textTransform: "capitalize",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.6s ease-in-out , scale .3s ease-in-out  ",
    "&:hover": {
      color: colors.primaryRed,
      textShadow: `1px 3px 4px ${colors.smokeGray}`,
      scale: "1.1",
    },
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          margin: "auto",
          backgroundColor: colors.White,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: {
            xs: "20px",
            sm: "20px 30px",
            md: "20px 80px",
            lg: "20px 80px",
            xl: "25px 120px",
          },
          position: "relative",
          zIndex: "1000",
        }}
      >
        {/* maxwidth container  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1600px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => router.push("home")}
            sx={{
              width: "100%",
              maxWidth: { xs: "114px", xl: "150px" },
              height: "auto",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              src={svgs.Logo}
              alt="Picture of the author"
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: "15px", lg: "20px", xl: "30px" },
            }}
          >
            <Typography
              onClick={() => router.push("home")}
              sx={{ ...textStyle }}
            >
              home
            </Typography>
            <Typography
              onClick={() => router.push("about-us")}
              sx={{ ...textStyle }}
            >
              about us
            </Typography>
            <Typography
              onClick={() => router.push("our-food")}
              sx={{ ...textStyle }}
            >
              Our Food
            </Typography>
            <Typography
              onClick={() => router.push("contact-us")}
              sx={{ ...textStyle }}
            >
              contact us
            </Typography>
            {/* order dropdown  */}
            <Box
              onMouseLeave={closeDropdown}
              sx={{
                position: "relative",
                display: "inline-block",
                width: "auto",
              }}
            >
              <Box
                onMouseEnter={openDropdown}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  onClick={() => router.push("order")}
                  sx={{ ...textStyle }}
                >
                  order
                </Typography>
                <ArrowDropDownIcon
                  sx={{
                    marginLeft: "4px",
                    paddingTop: "-12px",
                    fontSize: "20px",
                    color: colors.primaryRed,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: open ? "block" : "none",
                  position: "absolute",
                  backgroundColor: colors.White,
                  width: "auto",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  zIndex: 1,
                  textWrap: "nowrap",
                  borderRadius: "4px",
                }}
              >
                <Typography
                  sx={{
                    ...textStyle,
                    padding: "20px 25px",
                    transition:
                      "color 0.4s ease-in-out, background-color 0.6s ease-in-out",
                    "&:hover": {
                      color: colors.White,
                      backgroundColor: colors.primaryRed,
                    },
                  }}
                  onClick={() => router.push("./order-rotherham")}
                >
                  order rotherham
                </Typography>
                <Typography
                  sx={{
                    ...textStyle,
                    padding: "20px 25px",
                    transition:
                      "color 0.4s ease-in-out, background-color 0.6s ease-in-out",
                    "&:hover": {
                      color: colors.White,
                      backgroundColor: colors.primaryRed,
                    },
                  }}
                  onClick={() => router.push("./order-huddersfield")}
                >
                  order huddersfield
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Social Media Icons and Search */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <Box
                sx={{
                  width: { sm: "30px", xl: "40px" },
                  height: "auto",
                }}
              >
                <a
                  href="https://www.instagram.com/sabirsgrill/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={svgs.Instagram}
                    alt="Facebook"
                  />
                </a>
              </Box>
              <Box
                sx={{
                  width: { sm: "30px", xl: "40px" },
                  height: "auto",
                }}
              >
                <a
                  href="https://www.facebook.com/sabirsgrill/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={svgs.Facebook}
                    alt="Facebook"
                  />
                </a>
              </Box>
            </Box>
          </Box>

          {/* Hamburger Icon for Mobile */}
          <Box
            sx={{
              width: "30px",
              height: "auto",
              display: { xs: "block", md: "none" },
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={svgs.Hamburger}
              alt="Hamburger"
              onClick={toggleSidebar}
            />
          </Box>
        </Box>
      </Box>

      {/* Sidebar and Overlay */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: sidebarOpen ? { xs: "60%", sm: "40%" } : "0",
          height: "100vh",
          background: "linear-gradient(90deg, #851A1D 0%, #541113 100%)",
          boxShadow: sidebarOpen ? "-5px 0 15px rgba(0, 0, 0, 0.3)" : "none",
          overflowX: "hidden",
          transition: "0.3s",
          zIndex: 1000,
          overflow: "hidden",
          textWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            margin: { xs: "20px 20px 0 0", sm: "20px 30px 0  0 " },
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "30px", height: "42.5px", objectFit: "contain" }}
            src={svgs.HamburgerWhite}
            alt="Hamburger"
            onClick={toggleSidebar}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "20px", sm: "20px 30px" },
            gap: "10px",
            alignItems: "flex-end",
          }}
        >
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            onClick={() => router.push("home")}
            variant="h6"
            sx={{
              ...textStyle,
              color: colors.White,
            }}
          >
            home
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            onClick={() => router.push("about-us")}
            variant="h6"
            sx={{
              ...textStyle,
              color: colors.White,
            }}
          >
            About Us
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            onClick={() => router.push("our-food")}
            variant="h6"
            sx={{
              ...textStyle,
              color: colors.White,
            }}
          >
            Our Food
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            onClick={() => router.push("order")}
            variant="h6"
            sx={{
              ...textStyle,
              color: colors.White,
            }}
          >
            Order
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            onClick={() => router.push("contact-us")}
            sx={{
              ...textStyle,
              color: colors.White,
            }}
          >
            Contact Us
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            sx={{
              ...textStyle,
              color: colors.White,
            }}
            onClick={() => router.push("/order-rotherham")}
          >
            Order Rotherham
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Typography
            sx={{
              ...textStyle,
              color: colors.White,
            }}
            onClick={() => router.push("/order-huddersfield")}
          >
            Order Huddersfield
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: colors.White,
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "15px", sm: "25px" },
              width: "100%",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <a
                href="https://www.instagram.com/sabirsgrill/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={svgs.InstagramWhite}
                  alt="Instagram"
                />
              </a>
            </Box>
            <Box
              sx={{
                width: { xs: "20px", sm: "25px", lg: "30px" },
                height: "auto",
              }}
            >
              <a
                href="https://www.facebook.com/sabirsgrill/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={svgs.FacebookWhite}
                  alt="Facebook"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Blue Overlay */}
      {sidebarOpen && (
        <Box
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: colors.smokeGray,
            zIndex: 999,
            backdropFilter: "blur(10px)",
            transition: "0.3s",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
