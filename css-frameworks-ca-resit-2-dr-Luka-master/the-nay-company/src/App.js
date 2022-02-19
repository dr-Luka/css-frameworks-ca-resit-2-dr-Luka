import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
