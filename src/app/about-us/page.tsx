import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import OurBio from "./_sections/OurBio";
import Hero from "@/_components/Hero";

export default function AboutUs() {
  return (
    <Box>
      <Navbar />
      <Hero headingText="About Us" />
      <OurBio />
      <Footer />
    </Box>
  );
}
