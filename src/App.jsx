import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import NewsSection from "./components/NewsSection";
import ReactGA from "react-ga4";
import { isProduction } from "./constants/Utils";
import WebsiteUpdating from "./components/WebSiteUpdating";

const App = () => {
  // Tracking visits on website
  if (isProduction) {
    ReactGA.initialize("G-01NVCB1WQ2");
    ReactGA.send({ hitType: "pageview", page: "/home" });
  }

  return (
    <>
      {/* <Navbar />
      <NewsSection className="m-0" />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <Footer />
      </div> */}
      <WebsiteUpdating />
    </>
  );
};

export default App;
