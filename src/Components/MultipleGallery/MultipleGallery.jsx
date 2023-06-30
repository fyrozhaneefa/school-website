import React, { useState } from "react";
import bvbthrissur from "../Assets/Images/bvb_kendra.jpg";
import poochetty from "../Assets/Images/poochetty.png";
import potoore from "../Assets/Images/potoore.png";
import "./MultipleGallery.scss";
import { Col, Row } from "react-bootstrap";

const MultipleGallery = ({ pageRef, pageNumber }) => {
  const [selectedSchoolImage, setSelectedSchoolImage] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [OpenModal, setOpenModal] = useState(false);

  const images = [
    { id: 1, src: bvbthrissur, title: "BHAVAN'S BALAMANDIR TOWN-SCHOOL" },
    { id: 2, src: poochetty, title: "BHAVAN'S BALAMANDIR POOCHATTY" },
    {
      id: 3,
      src: potoore,
      title: "BHAVAN'S BALAMANDIR POTTORE",
    },
  ];
  const importAll = (r) => r.keys().map(r);
  const TOWN_SCHOOL_images = importAll(
    require.context(
      "../Assets/MultipleGalleryImages/TOWN_SCHOOL",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const POOCHATTY = importAll(
    require.context(
      "../Assets/MultipleGalleryImages/POOCHATTY",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const POTTORE = importAll(
    require.context(
      "../Assets/MultipleGalleryImages/POTTORE",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const handleImageClick = (image) => {
    setOpenModal(true);
    if (image.title === "BHAVAN'S BALAMANDIR TOWN-SCHOOL") {
      setSelectedSchoolImage(TOWN_SCHOOL_images);
    }
    if (image.title === "BHAVAN'S BALAMANDIR POOCHATTY") {
      setSelectedSchoolImage(POOCHATTY);
    }
    if (image.title === "BHAVAN'S BALAMANDIR POTTORE") {
      setSelectedSchoolImage(POTTORE);
    }
  };

  const handleCloseModal = () => {
    setSelectedSchoolImage(null);
    setEnlargedImage(null);
    setOpenModal(false);
  };
  const handleClickPicture = (image) => {
    setEnlargedImage(image);
  };

  // const handleClickOutside = (event) => {
  //   if (!event.target.closest(".enlarged-image-content")) {
  //     setEnlargedImage(null);
  //   }
  // };
  return (
    <div ref={pageRef} id={`page-${pageNumber}`} className="multipleGallery">
      {/* header */}{" "}
      <div className="multi-gall-container">
        <Row>
          <Col md={12} className="gallery-header">
            <div className="header-top">
              {/* TOUR  */}
              <span>BHAVAN'S BALAMANDIR</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Clicks From Different Schools</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container">
        <div className="container image-container">
          <div className="row d-flex justify-content-around">
            {images.slice(0, 3).map((image) => (
              <div
                key={image.id}
                className="col-md-4 d-flex justify-content-center"
              >
                <div
                  className="image-block"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="image-overlay">
                    <div className="image-title">{image.title}</div>
                  </div>
                  <img src={image.src} alt={image.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {OpenModal && (
          <div className="modal">
            <div className="modal-content">
              <div className="close-btn" onClick={handleCloseModal}>
                &times;
              </div>
              <div className="image-grid">
                {selectedSchoolImage.map((image) => (
                  <div
                    key={image}
                    className="square-box"
                    onClick={() => handleClickPicture(image)}
                  >
                    <img src={image} alt={image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Enlarged image */}
        {enlargedImage && (
          <div
            className="backdrop"
            //  onClick={handleClickOutside}
          >
            <div className="enlarged-image">
              <div
                className="enlarged-image-content"
                // onClick={() => {
                //   setEnlargedImage(null);
                // }}
              >
                <div
                  className="close-btn"
                  onClick={() => {
                    setEnlargedImage(null);
                  }}
                >
                  {" "}
                  &times;
                </div>
                <img
                  src={enlargedImage}
                  alt={enlargedImage}
                  // onClick={() => {
                  //   setEnlargedImage(null);
                  // }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleGallery;
