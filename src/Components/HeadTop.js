import React from 'react';
import {Row,Container, Col} from "react-bootstrap";
import logo from "../../src/logo_web.png";
import search_icon from "../../src/icon_search_white.png"
function HeadTop(props) {
    return (
        <div className="app-header">
           <Container>
               <Row className="py-5">
                   <Col md="8">
                       <img className="logo" src={logo} alt="Weather Application"/>
                   </Col>
                   <Col md="4">
                        <div className="search-box">
                            <input placeholder="Search City" className="search-input" name="city"/>    
                               
<button className="search-btn" ><img src={search_icon} alt="search"/></button>
                        </div>      
                   </Col>
                </Row>
            </Container> 
        </div>
    );
}

export default HeadTop;