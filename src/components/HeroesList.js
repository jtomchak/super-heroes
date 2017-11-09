import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroesListItem from "./HeroesListItem";
import HeroForm from "./HeroForm";
import "./HeroesList.css";

class HeroesList extends Component {
  state = {
    title: "Super Heroes",
    selectedHero: {
      id: undefined,
      superhero: ""
    }
  };

  //update our super in the array, in place
  handleSubmit = (event, hero) => {
    event.preventDefault();
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

  handleSelectedHero = hero => {
    // this.state.selectedHero = hero;
    this.setState({
      selectedHero: hero
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ul className="heroes">
                <HeroesListItem
                  heroes={this.props.heroes}
                  onSelectedHero={this.handleSelectedHero}
                />
              </ul>
            </div>
            {this.state.selectedHero.id && (
              <div className="col-md-6 col-sm-12">
                <h2 style={{ textAlign: "center" }}>
                  {this.state.selectedHero.superhero}
                </h2>
                <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
                  <button className="btn btn-info">Details</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroesList;
