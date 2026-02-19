import "./App.css";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";


const App = () => {
  return (
    <div className="scroll-mt-30">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
// TODO: import fontawesome icons in why us 
// TODO: add a video atomic plan background 
export default App;
