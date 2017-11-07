import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SuperHeroes from "./superheroes";

class App extends Component {
  state = {
    title: "Super Heroes",
    heroes: SuperHeroes.HEROES,
    selectedHero: {
      id: undefined,
      superhero: ""
    }
  };

  //update our super in the array, in place
  handleSubmit = event => {
    event.preventDefault();
    const hero = this.state.selectedHero;
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

  handleSelectedHero = hero => {
    // this.state.selectedHero = hero;
    this.setState({
      selectedHero: hero
    });
  };

  handleNameChange = event => {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        superhero: event.target.value
      }
    });
  };

  render() {
    const heroesList = this.state.heroes.map(hero => {
      return (
        <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
          <span className="badge">{hero.id}:</span> {hero.superhero}
        </li>
      );
    });
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ul className="heroes">{heroesList}</ul>
            </div>
            {this.state.selectedHero.id && (
              <div className="col-md-6 col-sm-12">
                <h2 style={{ textAlign: "center" }}>
                  {this.state.selectedHero.superhero}
                </h2>
                <form
                  className="form-horizontal"
                  style={{ width: "60%", padding: "25px" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <label className="control-label">ID: </label>
                    {this.state.selectedHero.id}
                  </div>
                  <div className="form-group">
                    <label className="control-label">Hero Name: </label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.selectedHero.superhero}
                      onChange={event => this.handleNameChange(event)}
                    />
                  </div>
                  <input
                    className="button btn btn-info"
                    type="submit"
                    value="submit"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
