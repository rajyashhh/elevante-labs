import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import Services from "./components/Services";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Philosophy from "./components/Philosophy";
import CTA from "./components/CTA";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";
import Footer from "./components/Footer";

const App = () => {
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Reel />
      <Services />
      <Stats />
      <ClientLogos />
      <Projects />
      <TechStack />
      <Testimonials />
      <Philosophy />
      <CTA />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default App;
