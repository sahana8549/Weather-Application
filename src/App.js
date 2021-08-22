import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadTop from "./Components/HeadTop";
import Navi from "./Components/Navbar";
import background from "../src/background.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recent from "./Pages/Recent";
import Favourite from "./Pages/Favourite";
function App() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <HeadTop />
        <Router>
          <Navi />
          <Route exact path="/" component={Home} />
          <Route path="/Favourites" component={Favourite} />
          <Route path="/Recent" component={Recent} />
        </Router>
      </div>
    </div>
  );
}

export default App;
