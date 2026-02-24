import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/services.jsx";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Careers from "../pages/Careers";

import Portfolio from "../pages/portfolio/Portfolio";
import CaseStudyDetails from "../pages/portfolio/CaseStudyDetails";

import Blog from "../pages/blog/Blog";
/* import BlogPost from "../pages/blog/BlogPost"; */

import WebDevelopment from "../pages/services/WebDevelopment";
import UIUXDesign from "../pages/services/UIUXDesign";
import SEO from "../pages/services/SEO";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Individual Services */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/seo" element={<SEO />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudyDetails />} />

        <Route path="/blog" element={<Blog />} />
        {/*  <Route path="/blog/:slug" element={<BlogPost />} /> */}

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
