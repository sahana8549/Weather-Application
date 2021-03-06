import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navi(props) {
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
  const setActive = () => {
    setIsHome(false);
  };
  return (
    <div>
      <Container>
        <Row className="nav-row">
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
                  to="/Favourite"
                  activeClassName="active-nav"
                  onClick={setActive}
                >
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Recent"
                  activeClassName="active-nav"
                  onClick={setActive}
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

export default Navi;
