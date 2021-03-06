import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    elementId: asin,
    rate: 1,
  });

  useEffect(() => {
    setComment({ ...comment, elementId: asin });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        // +  this.state.comment.elementId
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzAzMjg5OTMsImV4cCI6MTYzMTUzODU5M30._U9OnbS3a70KqILTo7c-gy17iMNSGLvIINequMhIMDk",
          },
        }
      );
      if (response.ok) {
        alert("Comment added!");
        // window.location.reload();
      } else {
        console.log("error");
        alert("something went wrong");
        // window.location.reload();
      }
    } catch (error) {
      console.log("error");
    }
  };

  // render() {
  return (
    <div>
      <Form onSubmit={sendComment} className="text-center">
        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control
            type="text"
            placeholder="Leave a comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};
// }

export default AddComment;
