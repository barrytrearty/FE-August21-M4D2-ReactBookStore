// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MainSection from "./components/MainSection";
import FormLogin from "./components/FormLogin";
// import MyJumbotron from "./components/MyJumbotron";
// import LatestReleases from "./components/LatestReleases";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Route path="/" exact component={MainSection} />
        <Route path="/formLogin" exact component={FormLogin} />
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;

// 1. Add a CommentArea component at the end of your SingleBook. When the user clicks on a SingleBook, this component should appear (hint: short-circuit!).
// 2. CommentArea should fetch and store the comments for the selected book, and contains two subcomponents: CommentsList and AddComment.
// 3. CommentsList holds a list of comments about the selected book, the comments array is passed as a prop from CommentArea. Each comment is made by the same SingleComment component.
// 4. AddComment contains a form for adding a text comment and a rating (from 1 to 5). This component should allow the user to POST a new comment on the selected book.
//  EXTRA:
// 5. Add near to each comment a button for DELETING it. It should create a request towards https://striveschool-api.herokuapp.com/api/comments/:commentId
// 6. Create a Loading component. This loading component should appear on the page when a remote request is ongoing.
// 7. Create an Error component. If something goes wrong with a network request, an error message should appear!
