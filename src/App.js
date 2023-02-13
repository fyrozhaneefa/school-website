import React, { useRef } from "react";
// import { Col, Row } from "react-bootstrap";

import "./App.css";
import TravelInfoCarousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Documentations from "./Components/Documentations/Documentations";
import Itinarary from "./Components/Itinarary/Itinarary";
import PhotoGallery from "./Components/Gallery/Gallery";
function App() {
  const pageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const scrollToPage = (pageNumber) => {
    pageRefs[pageNumber].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <HomePage className="banner" pageRef={pageRefs[0]} pageNumber={1} />
      <Navbar scrollToPage={scrollToPage} />
      <Documentations pageRef={pageRefs[1]} pageNumber={2} />
      <TravelInfoCarousel pageRef={pageRefs[2]} pageNumber={3} />
      <Itinarary pageRef={pageRefs[3]} pageNumber={4} />
      <PhotoGallery pageRef={pageRefs[4]} pageNumber={5} />
    </div>
  );
}

export default App;
