import React, { useRef } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{ homeRef, servicesRef, portfolioRef, aboutRef, contactRef }}
      />

      <section ref={homeRef} className="scroll-mt-24">
        Home
      </section>
      <section ref={servicesRef} className="scroll-mt-24">
        Services
      </section>
      <section ref={portfolioRef} className="scroll-mt-24">
        Portfolio
      </section>
      <section ref={aboutRef} className="scroll-mt-24">
        About
      </section>
      <section ref={contactRef} className="scroll-mt-24">
        Contact
      </section>
    </>
  );
};

export default Home;
