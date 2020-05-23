import React from "react";
import "./App.css";
import { Row, Col, InputGroup, Input } from "reactstrap";

//Components
import Table from "./Table/Table";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Row>
        <Col
          lg="12"
          style={{
            border: "2px solid purple",
            marginBottom: "20px",
            height: "100px",
          }}
        >
          Nav
        </Col>
      </Row>
      <Row>
        <Col lg="2" style={{ border: "2px solid orange", padding: "10px" }}>
          <h3>Sidebar</h3>
          <Sidebar />
        </Col>
        <Col lg="10" style={{ border: "2px solid red", padding: "20px" }}>
          <Row>
            <Col lg="12">
              <InputGroup style={{ marginBottom: "20px" }}>
                <Input style={{ marginRight: "5px" }} placeholder="date" />
                <Input style={{ marginRight: "5px" }} placeholder="species" />
                <Input style={{ marginRight: "5px" }} placeholder="length" />
                <Input style={{ marginRight: "5px" }} placeholder="weight" />
                <Input style={{ marginRight: "5px" }} placeholder="location" />
                <Input style={{ marginRight: "5px" }} placeholder="image" />
              </InputGroup>
            </Col>
            <Col lg="12">
              <button className="btn btn-info">Submit</button>
            </Col>
          </Row>
          <Row>
            <Col lg="12" style={{ margin: "20px 0" }}>
              <Table />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
