import React from "react";
import "../css/Home.scss";
import { Container, Row, Col } from "reactstrap";

function Home(): JSX.Element {
  return (
    <div id="home">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="title">
              <div className="font-bold">
                Hello, I’m{" "}
                <span className="font-color-pink">Hyunseung Seok</span>.
              </div>
              <div className="font-bold">JavaScript Developer.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
