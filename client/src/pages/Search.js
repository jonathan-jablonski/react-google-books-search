import React, { useEffect, useState } from "react";
import { Col, Row, Container, InputGroup } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Results from "../components/Results/Results";

function Search() {
    const [search, setSearch] = useState("Music");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    console.log(error);

    useEffect(() => {
        if (!search) {
            return;
        }

        API.fetchGoogle(search)
            .then(res => {
                console.log("response", res);
                if (res.data.items.length === 0) {
                    throw error("Try again.");
                }
                setResults(res.data.items);
            })
            .catch(err => setError(err));
    }, [search]);
    console.log("results", results);

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    const handleDBSave = (index) => {
        console.log([index]);
        console.log(results[index].volumeInfo);
        API.saveBook({
            title: results[index].volumeInfo.title,
            author: results[index].volumeInfo.authors,
            genre: results[index].volumeInfo.categories,
            description: results[index].volumeInfo.description,
            image: results[index].volumeInfo.imageLinks === undefined ? "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg" : results[index].volumeInfo.imageLinks.thumbnail,
            link: results[index].volumeInfo.infoLink
        })
            .then(res => console.log("Saved to DB", res))
            .catch(err => console.log("GOT ERROR!", err))
    }
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <Results />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
