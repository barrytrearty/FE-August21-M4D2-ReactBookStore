import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzAzMjg5OTMsImV4cCI6MTYzMTUzODU5M30._U9OnbS3a70KqILTo7c-gy17iMNSGLvIINequMhIMDk",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
      window.location.reload();
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
    window.location.reload();
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item className="text-center mt-2">
    <div> {comment.comment}</div>
    <div>
      {" "}
      Rate: {comment.rate} <span class="fa fa-star text-warning"></span>
    </div>
    <Button
      variant="danger"
      className="ml-2 mt-2"
      onClick={() => deleteComment(comment._id)}
    >
      <i class="far fa-trash-alt"></i>
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
