// import { Component } from "react";
import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentSection from "./CommentSection";
import { Row, Form, FormControl, Button, Col } from "react-bootstrap";

// import books1 from "../data/fantasy.json";

// class BookList extends Component {
//   state = {
//     searchQuery: "",
//     selectedBook: null,
//   };
const BookList = ({ array }) => {
  // render() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Row>
      <Col md={8}>
        <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log(searchQuery);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Row>

        <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {/* <Row className="row-cols-1"> */}
          {array
            .filter((book) => book.title.toLowerCase().includes(searchQuery))
            .map((book) => (
              <SingleBook
                obj={book}
                changeSelectedBook={(asin) => {
                  setSelectedBook(asin);
                  console.log(selectedBook);
                }}
              />
            ))}
        </Row>
      </Col>
      <Col md={4}>
        <div>{<CommentSection asin={selectedBook} />}</div>
      </Col>
    </Row>
  );
};
// }

export default BookList;
