import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentSection from "./CommentSection";
import { Row, Form, FormControl, Button, Col } from "react-bootstrap";

// import books1 from "../data/fantasy.json";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <Row>
        <Col md={8}>
          <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Row>

          <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {/* <Row className="row-cols-1"> */}
            {this.props.array
              .filter((book) =>
                book.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((book) => (
                <SingleBook
                  obj={book}
                  changeSelectedBook={(asin) => {
                    this.setState({ selectedBook: asin });
                    console.log(this.state.selectedBook);
                  }}
                />
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <div>{<CommentSection asin={this.state.selectedBook} />}</div>
        </Col>
      </Row>
    );
  }
}

export default BookList;
