import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./Info.scss";
import { useState } from "react";

const News = ({ pageRef, pageNumber }) => {
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bvbthrissur.com/bvb_admin/index.php/News_list",
        // `https://bvbthrissur.com/bvb_admin/index.php/Gallery_images_list/7`,
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
      console.log("news", result);
      setData(result.data?.news);
      // setSelectedSchoolImage(result.data?.gallery_images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("news Data", Data);
  }, [Data]);

  return (
    <>
      <div className="news-container" ref={pageRef} id={`page-${pageNumber}`}>
        <div className="container">
          <Row>
            <Col md={12} className="feedback-header">
              <div className="header-top">
                NEWS <span>UPDATES</span>
              </div>
              <div className="header-sep"></div>
              {/* <div className="header-bottom">
              <span>Series of Teachers Training Programmes </span>
            </div> */}
            </Col>
          </Row>
        </div>
        <div className="container padding2em">
          <Row>
            <Col md={12}>
              <Row>
                {Data?.map((news, index) => (
                  <Col md={4} className="info-left" key={index}>
                    <div className="image-div">
                      <img
                        className="main-header-text col-md-6 col-sm-6 col-xs-12"
                        src={news?.image}
                        alt="Bhavans logo"
                      />
                    </div>
                  </Col>
                ))}
                {/* <Col md={8}>
                    <div className="title">
                      {" "}
                      <h1>
                        <strong>{news?.title}</strong>
                      </h1>{" "}
                    </div>
                    <div className="info-right">{news?.description}</div>
                  </Col> */}
              </Row>
            </Col>
          </Row>
          <hr />
        </div>
      </div>
    </>
  );
};

export default News;
