import "react-responsive-carousel/lib/styles/carousel.css";
import "./Gallery.scss";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import Image1 from "../Assets/Images/Image1.jpg";
import Image2 from "../Assets/Images/Image2.jpg";
import Image3 from "../Assets/Images/Image3.jpg";
import Image4 from "../Assets/Images/Image4.jpg";
import Image5 from "../Assets/Images/Image5.jpg";
import Image6 from "../Assets/Images/Image6.jpg";
import Image7 from "../Assets/Images/Image7.jpg";
import Image8 from "../Assets/Images/Image8.jpg";
import Image9 from "../Assets/Images/Image9.jpg";
import Image10 from "../Assets/Images/Image10.jpg";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const PhotoGallery = ({ pageRef, pageNumber }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  // const handleScrollLeft = () => {
  //   setScrollLeft(scrollLeft - 361);
  //   if (scrollLeft < 0) {
  //     setScrollLeft(0);
  //   }
  // };

  // const handleScrollRight = () => {
  //   let maxLength = (images.length - 6) * 361;
  //   console.log("mazlength", maxLength);
  //   console.log("mazlength", images.length);
  //   setScrollLeft(scrollLeft + 361);
  //   if (scrollLeft > maxLength) {
  //     setScrollLeft(maxLength);
  //   }
  // };
  const images1 = [Image1, Image2, Image3, Image4, Image5];
  const images2 = [Image6, Image7, Image8, Image9, Image10];

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images1[index]);
    setModalIsOpen(true);
    console.log(index);
  };

  const openModal2 = (index) => {
    setSelectedImage(images2[index]);
    setModalIsOpen(true);
    console.log(index);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="gallery-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="gallery-header">
            <div className="header-top">
              TOUR <span>GALLERY</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Clicks From Previous Tours</span>
            </div>
          </Col>
        </Row>
      </div>
      <Carousel
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
      >
        <Carousel.Item className="carousel-container">
          <div className="image-main">
            {images1.map((items, index) => {
              return (
                <div className="image-container" key={index}>
                  <img src={items} alt="Image1" />
                  <AiOutlinePlus onClick={() => openModal(index)} />
                </div>
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-container">
          <div className="image-main">
            {images2.map((items, index) => {
              return (
                <div className="image-container" key={index}>
                  <img src={items} alt="Image1" />
                  <AiOutlinePlus onClick={() => openModal2(index)} />
                </div>
              );
            })}
          </div>
        </Carousel.Item>
      </Carousel>
      <div
        className={`backdrop ${!modalIsOpen ? "hidden" : ""}`}
        onClick={handleBackdropClick}
      >
        <div className="modal-content">
          <img src={selectedImage} alt="selected" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
