import HeroSection from "../components/sections/home/HeroSection.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";
import SocialProofSection from "../components/sections/home/SocialProofSection.jsx";
import ServicesSection from "../components/sections/home/ServicesSection.jsx";
import CaseStudySection from "../components/sections/home/CaseStudySection.jsx";
import VerticalProcessSection from "../components/sections/home/VertialProcessSection.jsx";
import DifferentiatorSection from "../components/sections/home/DifferentiatorSection.jsx";
import ContactSection from "../components/sections/home/ContactSection.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <CaseStudySection />
      <TestimonialSection />
      <VerticalProcessSection />
      <DifferentiatorSection />
      <ContactSection />
    
    </>
  );
};

export default Home;
