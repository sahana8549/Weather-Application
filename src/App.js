import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadTop from "./Components/HeadTop";
import Navi from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recent from "./Pages/Recent";
import Favourite from "./Pages/Favourite";
function App() {
  return (
    <div className="background">
      <HeadTop />
      <Router>
        <Navi />
        <Route exact path="/" component={Home} />
        <Route path="/Favourite" component={Favourite} />
        <Route path="/Recent" component={Recent} />
        <Route path="/Weather/:city" component={Home} />
      </Router>
    </div>
  );
}

export default App;
