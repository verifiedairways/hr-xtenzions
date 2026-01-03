import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import HowToOrder from "../components/HowToOrder";
import FinalCTA from "../components/FinalCTA";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Products />
      <Gallery />
      <Testimonials />
      <HowToOrder />
      <FinalCTA />
      <WhatsAppButton />
      <Footer />
    </>
  );
}