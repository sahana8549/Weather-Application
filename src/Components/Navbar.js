import React from 'react';
import {Navbar,Container, Nav} from 'react-bootstrap';

function Navi(props) {
    let curDate = Date().toLocaleString()

    return (
        <div>
            <Navbar>
  <Container>
  <Navbar id="responsive-navbar-nav">
    <Nav className="nav-items">
      <Nav.Link href="#Home">HOME</Nav.Link>
      <Nav.Link href="#Favourite">FAVOURITE</Nav.Link> 
      <Nav.Link href="#Recent">RECENT SEARCH</Nav.Link>
    </Nav>
  </Navbar>
  <Nav>
  <p className="date-time">
              {curDate.slice(0,3)}, {curDate.slice(4,21)} Hours
            </p>
  </Nav>
  </Container>
</Navbar>
        </div>
    );
}

export default Navi;