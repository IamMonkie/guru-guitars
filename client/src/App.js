import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <header className="App-header">
              <p>Header Text Test</p>
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <body>
              <h3>Body Text Test</h3>
            </body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
