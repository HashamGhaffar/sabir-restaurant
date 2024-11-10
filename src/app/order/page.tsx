"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";
import Orderbody from "./_sections/Orderbody";

export default function Order() {
  return (
    <>
      <Box>
        <Navbar />
        <Hero headingText="Order" />
        <Orderbody />
        <Footer />
      </Box>
    </>
  );
}
