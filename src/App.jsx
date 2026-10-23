import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageLightbox from "./components/ImageLightbox";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import EnquiryPopup from "./components/EnquiryPopup";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#171614]">

      <ScrollToTop />

      <ImageLightbox>
        <EnquiryPopup />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </ImageLightbox>

    </div>
  );
}

export default App;