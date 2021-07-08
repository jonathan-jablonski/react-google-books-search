import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import SearchBar from "../components/SearchBar/SearchBar";


const Search = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <SearchBar />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
