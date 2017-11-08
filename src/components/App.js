import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HeroesList from "./HeroesList";
import HeroForm from "./HeroForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Super Hero Town</h1>
          <nav>
            <NavLink exact to="/heroes">
              Heroes
            </NavLink>
          </nav>
          <hr />

          <Route exact path="/heroes" component={HeroesList} />
          <Route path={"/heroes/details/:heroId"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
