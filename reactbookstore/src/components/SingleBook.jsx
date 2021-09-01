// import books1 from "../data/fantasy.json";
// import { Component } from "react";
// import { useState } from "react";
import { Col } from "react-bootstrap";

const SingleBook = ({ obj, changeSelectedBook }) => {
  //   state = {
  //     selected: false,
  //   };

  // render() {
  return (
    <Col className="d-flex flex-row" key={obj.asin}>
      <div
        // style={{ width: 100rem }}
        className="card mt-3"
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => changeSelectedBook(obj.asin)}
      >
        <img src={obj.img} className="card-img-top" alt="..." />
        <div
          className="card-body"
          // style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <h5 className="card-title">{obj.title}</h5>
          <div className="under-the-title">
            <h4>{obj.price}</h4>
          </div>
        </div>
      </div>
    </Col>
  );
};
// }

export default SingleBook;
