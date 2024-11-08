"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import Location from "../home-page/_sections/Location";

const heddingBox = {
  height: { xs: "55px", sm: "98px", lg: "117px" },
  width: { xs: "220px", sm: "400px", lg: "490px" },
  clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
  position: "absolute",
  top: "50%",
  sm: "50%",
  left: "50%",
  transform: "translate( -50% , -50% )",
};
export default function Order() {
  return (
    <>
      <Box>
        <Navbar />
        <Box
          sx={{
            textAlign: "center",
            backgroundImage: "url(/bgNewDishes.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Location />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
