import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import logo from "../../src/logo_web.png";
import { FaSearch } from "react-icons/fa";
function HeadTop(props) {
  return (
    <div className="app-header">
      <Container>
        <Row className="py-5">
          <Col md="8">
            <img className="logo" src={logo} alt="Weather Application" />
          </Col>
          <Col md="4">
            <div className="search-box">
              <input
                placeholder="Search City"
                className="search-input"
                name="city"
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeadTop;
