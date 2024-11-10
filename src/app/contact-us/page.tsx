import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import SectionContactUs from "./_sections/SectionContactUs";
import Footer from "@/_components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <Hero headingText="contact us" />
      <SectionContactUs />
      <Footer />
    </>
  );
}
