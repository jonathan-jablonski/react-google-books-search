import React, { useEffect, useState, useRef } from "react";
import DeleteBtn from '../components/DeleteBtn'
// import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import SearchBar from "../components/SearchBar/SearchBar";
import { Col, Container, Row } from "../components/Grid";

const Saved = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    
    {results.map(res => {
                return(
                    <> 
                        <Row>
                        
                        <div className="results-container">
                            <h1 style={{textAlign: "left"}}><a href={res.volumeInfo.infoLink}>{res.volumeInfo.title}</a></h1><br></br>
                            <h4 style={{textAlign: "left"}}>Genre: {res.volumeInfo.categories}</h4><br></br>
                            <img src={res.volumeInfo.imageLinks.smallThumbnail} alt="image" className="book-cover-thumbnail"/>
                            <p style={{textAlign: "left"}}>
                                <br></br>
                                <strong>Description</strong> <br></br> 
                                {res.volumeInfo.description}</p> <br></br>
                            <h3 style={{textAlign: "left"}}>By: {res.volumeInfo.authors}</h3>
                            <br></br>
                            <div className="save-button">
                                <Button variant="outline-secondary" onClick={() => DeleteBtn(res)} style={{alignContent:"right"}}>Save Me</Button>
                            </div>
                        </div>
                        <br></br>
                        </Row>
                    </>
                )
            })}
}

export default Saved
