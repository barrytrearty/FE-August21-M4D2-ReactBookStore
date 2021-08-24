// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import LatestReleases from "./components/LatestReleases";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbotron />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
