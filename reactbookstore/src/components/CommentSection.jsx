import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

// class CommentSection extends Component {
//   state = {
//     comments: [],
//   };
const CommentSection = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
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
        setComments(comments);
        console.log(comments);
      } else {
        console.log("error");
        // this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error);
      // this.setState({ isLoading: false, isError: true })
    }
  };

  useEffect(() => {
    fetchComments(asin);
  }, [asin]);

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     try {
  //       let response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments/" +
  //           this.props.asin,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzAzMjg5OTMsImV4cCI6MTYzMTUzODU5M30._U9OnbS3a70KqILTo7c-gy17iMNSGLvIINequMhIMDk",
  //           },
  //         }
  //       );
  //       console.log(response);
  //       if (response.ok) {
  //         let comments = await response.json();
  //         this.setState({ comments: comments });
  //         console.log(comments);
  //       } else {
  //         console.log("error");
  //         // this.setState({ isLoading: false, isError: true })
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       // this.setState({ isLoading: false, isError: true })
  //     }
  //   }
  // };

  return (
    <div>
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};
// }

export default CommentSection;
