import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Search() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <div className="topnav search-container">
                <input type="text" placeholder="Search Google Books"></input>
                <button type="submit" className="fa fa-search"></button>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
