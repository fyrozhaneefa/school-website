import React, { useRef } from "react";
// import { Col, Row } from "react-bootstrap";

import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import TravelInfoCarousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Documentations from "./Components/Documentations/Documentations";
import Itinarary from "./Components/Itinarary/Itinarary";
import PhotoGallery from "./Components/Gallery/Gallery";
import Info from "./Components/Info/Info";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";
import CenterofExcellence from "./Components/CenterofExcellence/CenterofExcellence";
// import BvbWelcome from "./Components/Itinarary/BvbWelcome";
import MultipleGallery from "./Components/MultipleGallery/MultipleGallery";
import Management from "./Components/Management/Management";
import News from "./Components/News/News";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Nios from "./Components/Nios/Nios";
// import TeacherTraining from "./Components/Info/TeacherTraining/TeacherTraining";

function App() {
  const pageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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
    <>
      {/* <Routes>
        <Route path="/teacher-training" element={<TeacherTraining />} />
      </Routes> */}
      <div className="App">
        <HomePage className="banner" pageRef={pageRefs[0]} pageNumber={1} />
        <Navbar scrollToPage={scrollToPage} />
        <Documentations pageRef={pageRefs[1]} pageNumber={2} />
        <News pageRef={pageRefs[2]} pageNumber={3} />
        <Itinarary pageRef={pageRefs[3]} pageNumber={4} />
        <MultipleGallery pageRef={pageRefs[8]} pageNumber={9} />
        <Nios pageRef={pageRefs[11]} pageNumber={12} />
        <Feedback pageRef={pageRefs[4]} pageNumber={5} />
        <CenterofExcellence pageRef={pageRefs[5]} pageNumber={6} />
        <Management pageRef={pageRefs[6]} pageNumber={7} />
        <PhotoGallery pageRef={pageRefs[7]} pageNumber={8} />
        <Info pageRef={pageRefs[9]} pageNumber={10} />
        <Contact pageRef={pageRefs[10]} pageNumber={11} />
        <div className="social-icons">
          <a
            href="https://www.instagram.com/bvbk.t/"
            target="_blank"
            className="insta"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/bvbk.t"
            target="_blank"
            className="fb"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
