import * as types from "../ActionTypes";

export const addHeroes = payload => ({
  type: "ADD_HEROES",
  heroes: payload.heroes
});

export const addHero = hero => ({
  type: "ADD_HERO",
  hero: hero
});
