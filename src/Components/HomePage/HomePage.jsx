import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import broshure from "../Assets/WebsiteImages/broshure.png";

const HomePage = ({ pageRef, pageNumber }) => {
  const [index, setIndex] = useState(0);
  const [brochureOpen, setBrochureOpen] = useState(true);
  const [Data, setData] = useState([]);
  const brochureRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 5000); // Adjust this value based on your desired rotation speed
    return () => clearInterval(intervalId);
  }, [Data]);

  const style = {
    backgroundImage: `url(${Data.length > 0 ? Data[index].banner_image : ""})`,
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "calc(100vh - 70px)",
    zIndex: -1,
    transition: "background-image 1s ease-out",
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bvbthrissur.com/bvb_admin/index.php/Banner_list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result.data?.banners);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("banner Data", Data);
  }, [Data]);
  const handleBrochureClose = (e) => {
    if (brochureRef.current && !brochureRef.current.contains(e.target)) {
      setBrochureOpen(false);
    }
  };

  useEffect(() => {
    if (brochureOpen) {
      document.addEventListener("click", handleBrochureClose);
    } else {
      document.removeEventListener("click", handleBrochureClose);
    }
    return () => {
      document.removeEventListener("click", handleBrochureClose);
    };
  }, [brochureOpen]);
  return (
    <div className="wraper" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="home-page" style={style}>
        <div className="container">
          <div className="inside">
            {/* <Row>
                <Col md="6">
                  <div className="date-box">
                    <div className="date-left">
                      <span>Departure On</span>
                      <span>25 JAN</span>
                      <span>2023</span>
                    </div>
                    <div className="date-right">
                      Sorry Folks, try our next Tour!
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="subscribe-box">
                    <div className="subscribe-box-left">
                      <Row className="w-100">
                        <Col md={6} className="input-s">
                          <div className="w-100">
                            <input
                              className="input-fields w-100"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="w-100">
                            <input
                              className="input-fields w-100"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="mt-4">
                        <input
                          className="input-fields w-100"
                          type="text"
                          placeholder="Enter email address here..."
                        />
                      </div>
                    </div>
                    <div className="subscribe-box-right">
                      <span>SUBSCRIBE TO GET UPDATES</span>
                    </div>
                  </div>
                </Col>
              </Row> */}
          </div>
          {/* <div className="home-page-container">
              <Row>
                <Col md={6}>
                  <div className="date-box">
                    <div className="date-left">
                      <span>Departure On</span>
                      <span>25 JAN</span>
                      <span>2023</span>
                    </div>
                    <div className="date-right">
                      Sorry Folks, try our next Tour!
                    </div>
                  </div>
                </Col>
                <Col md={6} className="subscribe-box">
                  <div className="subscribe-box-input w-60 ">
                    <div>
                      <div className="d-flex">
                        <input
                          className="input-fields"
                          type="text"
                          placeholder="First Name"
                        />
                        <input
                          className="input-fields"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                      <input
                        className="input-fields"
                        type="text"
                        placeholder="Enter Your Email Address Here..."
                      />
                    </div>
                  </div>
                  <div className="subscribe-box-icon w-40 d-flex justify-content-center align-items-center">
                    <span className="subscribe-text">
                      SUBSCRIBE TO GET UPDATES
                    </span>
                  </div>
                </Col>
              </Row>
            </div> */}
        </div>
        {/* {brochureOpen && (
          <div ref={brochureRef} className="brochure-container">
            <img src={broshure} alt="Brochure" className="brochure-image" />
            <button
              className="close-button"
              onClick={() => setBrochureOpen(false)}
            >
              X
            </button>
          </div>
        )} */}
        <div />
      </div>
    </div>
  );
};

export default HomePage;
