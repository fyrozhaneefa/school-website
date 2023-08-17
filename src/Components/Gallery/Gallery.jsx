import "react-responsive-carousel/lib/styles/carousel.css";
import "./Gallery.scss";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
//bhavansSparsh
import Image1 from "../Assets/GalleryPictures/BhavansSparsh/4.jpg";
import Image2 from "../Assets/GalleryPictures/BhavansSparsh/5.jpg";
import Image3 from "../Assets/GalleryPictures/BhavansSparsh/7.jpg";
import Image4 from "../Assets/GalleryPictures/BhavansSparsh/23.jpg";
import Image5 from "../Assets/GalleryPictures/BhavansSparsh/25.jpg";
import Image6 from "../Assets/GalleryPictures/BhavansSparsh/29.jpg";
import Image7 from "../Assets/GalleryPictures/BhavansSparsh/30.jpg";
import Image8 from "../Assets/GalleryPictures/BhavansSparsh/31.jpg";
import Image9 from "../Assets/GalleryPictures/BhavansSparsh/32.jpg";
import Image10 from "../Assets/GalleryPictures/BhavansSparsh/35.jpg";
//mahathmaGhandiBirthday
import Image11 from "../Assets/GalleryPictures/MahathmaGandhiBirthday/6.jpg";
import Image12 from "../Assets/GalleryPictures/MahathmaGandhiBirthday/7.jpg";
import Image13 from "../Assets/GalleryPictures/MahathmaGandhiBirthday/18.jpg";
import Image14 from "../Assets/GalleryPictures/MahathmaGandhiBirthday/20.jpg";
import Image15 from "../Assets/GalleryPictures/MahathmaGandhiBirthday/34.jpg";
//navarathri
import Image16 from "../Assets/GalleryPictures/Navarathri/1.jpg";
import Image17 from "../Assets/GalleryPictures/Navarathri/2.jpg";
import Image18 from "../Assets/GalleryPictures/Navarathri/6.jpg";
import Image19 from "../Assets/GalleryPictures/Navarathri/8.jpg";
// import Image20 from "../Assets/MultipleGalleryImages/POTTORE/12.jpg";
import Image20 from "../Assets/GalleryPictures/Navarathri/9.jpg";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const PhotoGallery = ({ pageRef, pageNumber }) => {
  // const [scrollLeft, setScrollLeft] = useState(0);

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
  const images3 = [Image11, Image12, Image13, Image14, Image15];
  const images4 = [Image16, Image17, Image18, Image19, Image20];

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
  const openModal3 = (index) => {
    setSelectedImage(images3[index]);
    setModalIsOpen(true);
    console.log(index);
  };
  const openModal4 = (index) => {
    setSelectedImage(images4[index]);
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
              {/* TOUR  */}
              <span>GALLERY</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Clicks From Previous Programs</span>
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
        <Carousel.Item className="carousel-container">
          <div className="image-main">
            {images3.map((items, index) => {
              return (
                <div className="image-container" key={index}>
                  <img src={items} alt="Image1" />
                  <AiOutlinePlus onClick={() => openModal3(index)} />
                </div>
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-container">
          <div className="image-main">
            {images4.map((items, index) => {
              return (
                <div className="image-container" key={index}>
                  <img src={items} alt="Image1" />
                  <AiOutlinePlus onClick={() => openModal4(index)} />
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
