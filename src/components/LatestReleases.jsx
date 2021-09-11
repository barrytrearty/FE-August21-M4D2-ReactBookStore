import books1 from "../data/fantasy.json";
import books2 from "../data/history.json";
import books3 from "../data/horror.json";
import books4 from "../data/romance.json";
import books5 from "../data/scifi.json";
import { Container, ButtonGroup, Button } from "react-bootstrap";
// import { Component } from "react";
import { useState } from "react";
import BookList from "./BookList";

// class LatestReleases extends Component {
//   state = {
//     selectedCategory: books1,
//   };
const LatestReleases = () => {
  // render()
  // {

  const [selectedCategory, setSelectedCategory] = useState(books1);

  return (
    <Container className="bgFor">
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => setSelectedCategory(books1)} variant="success">
          Fantasy
        </Button>
        <Button onClick={() => setSelectedCategory(books2)} variant="warning">
          History
        </Button>
        <Button onClick={() => setSelectedCategory(books3)} variant="danger">
          Horror
        </Button>
        <Button onClick={() => setSelectedCategory(books4)} variant="primary">
          Romance
        </Button>
        <Button onClick={() => setSelectedCategory(books5)} variant="secondary">
          SciFi
        </Button>
      </ButtonGroup>

      <BookList array={selectedCategory} />
    </Container>
  );
};
// }

export default LatestReleases;
