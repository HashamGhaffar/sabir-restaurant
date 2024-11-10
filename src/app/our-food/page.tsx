import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import OurFoodBody from "./_sections/OurFoodBody";
import Hero from "@/_components/Hero";

export default function OurFood() {
  return (
    <Box>
      <Navbar />
      <Hero headingText="our food" />
      <OurFoodBody />
      <Footer />
    </Box>
  );
}
