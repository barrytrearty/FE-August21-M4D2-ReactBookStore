import books1 from "../data/fantasy.json";
import books2 from "../data/history.json";
import books3 from "../data/horror.json";
import books4 from "../data/romance.json";
import books5 from "../data/scifi.json";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { Component } from "react";
import BookList from "./BookList";

class LatestReleases extends Component {
  state = {
    selectedCategory: books1,
  };

  render() {
    return (
      <Container className="bgFor">
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

        <BookList array={this.state.selectedCategory} />
      </Container>
    );
  }
}

export default LatestReleases;
