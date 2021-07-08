import React, { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';
import API from "../../utils/API"

const SearchBar = () => {
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

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        API.fetchGoogle(search)
        .then(res => {
            console.log("response", res);
            if (res.data.items.length === 0) {
                throw error("Try again.");
            }
            setResults(res.data.items);
        })
        .catch(err => setError(err));
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
        <div>
            <InputGroup className="mb-3" >
                    <Button variant="outline-secondary" id="button-addon1" onClick={handleClick}>
                        Search
                    </Button>
                <FormControl
                onSubmit={setSearch.handleInputChange}
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    )
}

export default SearchBar;
