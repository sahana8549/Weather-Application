import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
class Favourite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card
          className="card"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "0px",
          }}
        >
          <ListGroup
            className="list-group-item"
            style={{ backgroundColor: "transparent" }}
          >
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default Favourite;
