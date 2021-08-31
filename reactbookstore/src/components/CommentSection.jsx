import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentSection extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzAzMjg5OTMsImV4cCI6MTYzMTUzODU5M30._U9OnbS3a70KqILTo7c-gy17iMNSGLvIINequMhIMDk",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({ comments: comments });
          console.log(comments);
        } else {
          console.log("error");
          // this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error);
        // this.setState({ isLoading: false, isError: true })
      }
    }
  };

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentSection;
