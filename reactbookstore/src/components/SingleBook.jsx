// import books1 from "../data/fantasy.json";
import { Component } from "react";
import { Col } from "react-bootstrap";

class SingleBook extends Component {
  //   state = {
  //     selected: false,
  //   };

  render() {
    return (
      <Col className="d-flex flex-row" key={this.props.obj.asin}>
        <div
          // style={{ width: 100rem }}
          className="card mt-3"
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => this.props.changeSelectedBook(this.props.obj.asin)}
        >
          <img src={this.props.obj.img} className="card-img-top" alt="..." />
          <div
            className="card-body"
            // style={{ border: this.state.selected ? "3px solid red" : "none" }}
          >
            <h5 className="card-title">{this.props.obj.title}</h5>
            <div className="under-the-title">
              <h4>{this.props.obj.price}</h4>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default SingleBook;
