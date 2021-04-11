import React, {
} from "react";
import { Form } from "react-bootstrap";

const Search = ({search, searchInput, handleSearch}) => {

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Find a character</Form.Label>
      <Form.Control
        type="text"
        name="search"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
      <Form.Text className="text-muted">
        We'll never share your search with anyone else.
      </Form.Text>
    </Form.Group>
  );
};

export default Search;
