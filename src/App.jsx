import "./App.css";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default App;
