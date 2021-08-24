import books1 from "../data/fantasy.json";
import books2 from "../data/history.json";
import books3 from "../data/horror.json";
import books4 from "../data/romance.json";
import books5 from "../data/scifi.json";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Component } from "react";

class LatestReleases extends Component {
  state = {
    selectedCategory: books1,
  };

  render() {
    return (
      <Container>
        <ButtonGroup aria-label="Basic example">
          <Button
            onClick={() => this.setState({ selectedCategory: books1 })}
            variant="success"
          >
            Fantasy
          </Button>
          <Button
            onClick={() => this.setState({ selectedCategory: books2 })}
            variant="warning"
          >
            History
          </Button>
          <Button
            onClick={() => this.setState({ selectedCategory: books3 })}
            variant="danger"
          >
            Horror
          </Button>
          <Button
            onClick={() => this.setState({ selectedCategory: books4 })}
            variant="primary"
          >
            Romance
          </Button>
          <Button
            onClick={() => this.setState({ selectedCategory: books5 })}
            variant="secondary"
          >
            SciFi
          </Button>
        </ButtonGroup>

        <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {this.state.selectedCategory.map((book) => (
            <Col key={book.asin}>
              <div className="card mt-3">
                <img src={book.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <div className="under-the-title">
                    <h4>{book.price}</h4>
                    <div className="buttons-sect">
                      <button
                        className="btn btn-success cart-button"
                        onclick="addItemToCart(event)"
                      >
                        <i className="bi bi-cart-fill"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onclick="skipItem(event)"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestReleases;
