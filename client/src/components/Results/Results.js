import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';

const Results = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                    Search
                </Button>
                <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    )
}

export default Results;
