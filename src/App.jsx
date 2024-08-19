import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import NewsSection from "./components/NewsSection";
import { useState } from "react";
import PicturePreview from "./components/PicturePreview";

const App = () => {
  return (
    <>
      <Navbar />
      <NewsSection className="m-0" />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
