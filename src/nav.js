import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  let curDate = Date().toLocaleString();
  const [isHome, setIsHome] = useState(0);
  useEffect(() => {
    let routeLoc = window.location.href;
    routeLoc = String(routeLoc);
    if (routeLoc.indexOf("weather") >= 0) setIsHome(true);
    else setIsHome(false);
    return function cleanup() {
      setIsHome(false);
    };
  }, []);
  const toggleActive = () => {
    setIsHome(false);
  };
  return (
    <div>
      <Container>
        <Row style={{ marginBottom: "-30px" }}>
          <Col md={6}>
            <ul className="nav-items">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active-nav"
                  className={isHome ? "active-nav" : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favourites"
                  activeClassName="active-nav"
                  onClick={toggleActive}
                >
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recents"
                  activeClassName="active-nav"
                  onClick={toggleActive}
                >
                  Recent Search
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <p className="date-time">
              {curDate.slice(0, 3)}, {curDate.slice(4, 21)} Hours
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}
