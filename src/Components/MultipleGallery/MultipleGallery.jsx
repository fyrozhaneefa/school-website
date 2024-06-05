import React, { useEffect, useState } from "react";
// import bvbthrissur from "../Assets/Images/bvb_kendra.jpg";
// import poochetty from "../Assets/Images/poochetty.png";
// import potoore from "../Assets/Images/potoore.png";
import "./MultipleGallery.scss";
import { Col, Row } from "react-bootstrap";

const MultipleGallery = ({ pageRef, pageNumber }) => {
  const [selectedSchoolImage, setSelectedSchoolImage] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [OpenModal, setOpenModal] = useState(false);

  // const images = [
  //   { id: 1, src: bvbthrissur, title: "BHAVAN'S BALAMANDIR TOWN-SCHOOL" },
  //   { id: 2, src: poochetty, title: "BHAVAN'S BALAMANDIR POOCHATTY" },
  //   {
  //     id: 3,
  //     src: potoore,
  //     title: "BHAVAN'S BALAMANDIR POTTORE",
  //   },
  // ];
  // const importAll = (r) => r.keys().map(r);
  // const TOWN_SCHOOL_images = importAll(
  //   require.context(
  //     "../Assets/MultipleGalleryImages/TOWN_SCHOOL",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  // const POOCHATTY = importAll(
  //   require.context(
  //     "../Assets/MultipleGalleryImages/POOCHATTY",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  // const POTTORE = importAll(
  //   require.context(
  //     "../Assets/MultipleGalleryImages/POTTORE",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );

  const handleImageClick = (image) => {
    setOpenModal(true);
    fetch(
      `https://bvbthrissur.com/bvb_admin/index.php/Gallery_images_list/${image.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setSelectedSchoolImage(result.data?.gallery_images);
        console.log("picture", result?.data.gallery_images);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // if (image.title === "BHAVAN'S BALAMANDIR TOWN-SCHOOL") {
    //   setSelectedSchoolImage(TOWN_SCHOOL_images);
    // }
    // if (image.title === "BHAVAN'S BALAMANDIR POOCHATTY") {
    //   setSelectedSchoolImage(POOCHATTY);
    // }
    // if (image.title === "BHAVAN'S BALAMANDIR POTTORE") {
    //   setSelectedSchoolImage(POTTORE);
    // }
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

  const [Data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bvbthrissur.com/bvb_admin/index.php/Gallery_Bhavans_list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.data?.gallery);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("Gallery_Bhavans_list/id", selectedSchoolImage);
  }, [selectedSchoolImage]);
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
            {Data?.map((image) => (
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
                  <img src={image.image} alt={image.title} />
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
                {selectedSchoolImage?.map((image) => (
                  <div
                    key={image.id}
                    className="square-box"
                    onClick={() => handleClickPicture(image.image)}
                  >
                    <img src={image.image} alt={image.id} />
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
