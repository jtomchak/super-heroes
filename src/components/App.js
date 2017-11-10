import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeroesList from "./HeroesList";
import HeroForm from "./HeroForm";
import Dashboard from "./Dashboard";
import "./App.css";
import { getHeroes } from "../superheroes.service";
import { addHeroes } from "../actions/actions";
import { ADD_HERO } from "../ActionTypes";

class App extends Component {
  //life kyle hooks. do stuff on initialize
  componentWillMount() {
    getHeroes()
      .then(res => res.json())
      .then(payload => {
        this.props.add_heroes(payload);
      })
      .catch(err => console.log(err));
  }

  //update our super in the array, in place
  handleSubmit = (event, hero) => {
    // const hero = this.state.selectedHero;
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    this.setState({
      selectedHero: {
        id: undefined,
        superhero: ""
      },
      heroes: [
        ...this.state.heroes.slice(0, heroIndex),
        {
          ...hero,
          superhero: hero.superhero
        },
        ...this.state.heroes.slice(heroIndex + 1, this.state.heroes.length)
      ]
    });
  };

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
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/heroes">
              Heroes
            </NavLink>
          </nav>
          <hr />

          <Route
            exact
            path="/"
            render={props => <Dashboard heroes={this.props.heroes} />}
          />
          <Route
            exact
            path="/heroes"
            render={props => <HeroesList heroes={this.props.heroes} />}
          />
          <Route
            exact
            path={"/heroes/details/:heroId"}
            render={props => (
              <HeroForm
                {...props}
                handleSubmit={this.handleSubmit}
                getHeroById={this.getHeroById}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes
});

const mapDispatchToProps = dispatch => ({
  add_heroes: bindActionCreators(addHeroes, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
