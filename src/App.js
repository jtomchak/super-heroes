import React, { Component } from "react";
import "./App.css";
import SuperHeroes from "./superheroes";

class App extends Component {
  state = {
    title: "Super Heroes",
    heroes: SuperHeroes.HEROES
  };

  render() {
    const heroesList = this.state.heroes.map(function(hero, index) {
      return (
        <li>
          <span>{index}:</span> {hero.superhero}
        </li>
      );
    });
    console.log(heroesList);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul>{heroesList}</ul>
      </div>
    );
  }
}

export default App;
