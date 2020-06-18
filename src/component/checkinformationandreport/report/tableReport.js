import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
class TableReport extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item as="li">1.Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li">2.Morbi leo risus</ListGroup.Item>
              <ListGroup.Item as="li">3.Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item as="li">4.Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li">5.Morbi leo risus</ListGroup.Item>
              <ListGroup.Item as="li">6.Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item as="li">7.Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li">8.Morbi leo risus</ListGroup.Item>
              <ListGroup.Item as="li">9.Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-md-10">2</div>
        </div>
      </div>
    );
  }
}
export default TableReport;
