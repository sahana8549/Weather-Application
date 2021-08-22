import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import logo from "../../src/logo_web.png";
import { FaSearch } from "react-icons/fa";
function HeadTop(props) {
  const [city, setCity] = useState(0);
  const searchCity = () => {
    let url = "/weather/" + city;
    window.location.href = url;
  };
  return (
    <div className="app-header">
      <Container>
        <Row className="py-5 row">
          <Col md="8">
            <img className="logo" src={logo} alt="Weather Application" />
          </Col>
          <Col md="4">
            <div className="search-box-container">
              <div className="search-box">
                <input
                  placeholder="Search City"
                  className="search-input"
                  name="city"
                />
                <button className="search-btn" onClick={searchCity}>
                  <FaSearch />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeadTop;
