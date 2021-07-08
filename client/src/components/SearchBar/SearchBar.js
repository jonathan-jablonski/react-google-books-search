import React, { useEffect, useState, useRef } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';
import API from "../../utils/API"

const SearchBar = (props) => {
    const [search, setSearch] = useState("Music");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const searchBar = useRef(null);

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

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(searchBar)
        API.fetchGoogle(searchBar.current.value)
        .then(res => {
            console.log("response", res);
            if (res.data.items.length === 0) {
                throw error("Try again.");
            }
            setResults(res.data.items);
        })
        .catch(err => setError(err));
    }

    const handleDBSave = (book) => {
        console.log(book);
        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            genre: book.volumeInfo.categories,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks === undefined ? "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg" : book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        })
            .then(res => console.log("Saved to DB", res))
            .catch(err => console.log("GOT ERROR!", err))
    }

    return (
        <div>
            <InputGroup className="mb-3" >
                    <Button variant="outline-secondary" id="button-addon1" onClick={handleClick}>
                        Search
                    </Button>
                <FormControl
                ref={searchBar}
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            {results.map(res => {
                return(
                    <> 
                        <div>
                            <h1>{res.volumeInfo.title}</h1>
                            <button type="button" onClick={() => handleDBSave(res)}>Save Me</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default SearchBar;
