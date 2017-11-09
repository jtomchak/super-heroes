import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HeroesList from "./HeroesList";
import HeroForm from "./HeroForm";
import { getHeroes } from "../superheroes.service";

class App extends Component {
  state = {
    heroes: []
  };
  //life kyle hooks. do stuff on initialize
  componentWillMount() {
    getHeroes()
      .then(res => res.json())
      .then(payload => {
        this.setState({
          heroes: payload.heroes
        });
      })
      .catch(err => console.log(err));
  }

  getHeroById = id => {
    const hero = this.state.heroes.find(hero => hero.id === id);
    return hero;
  };

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

          <Route
            exact
            path="/heroes"
            render={props => <HeroesList heroes={this.state.heroes} />}
          />
          <Route
            exact
            path={"/heroes/details/:heroId"}
            render={props => (
              <HeroForm {...props} getHeroById={this.getHeroById} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
