import books from "../data/history.json";
import { Container, Row, Col } from "react-bootstrap";

const LatestReleases = () => {
  return (
    <Container>
      <Row className="row-cols-2">
        {books.map((book) => (
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
                      <i className="bi bi-cart-fill"></i>{" "}
                    </button>
                    <button
                      className="btn btn-danger"
                      onclick="skipItem(event)"
                    >
                      <i className="bi bi-trash"></i>{" "}
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestReleases;
