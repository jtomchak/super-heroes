import * as types from "../ActionTypes";

const initState = [{ id: 21, superhero: "Panda Bear Man", skill: "none" }];

export default function heroes(state = initState, action) {
  switch (action.type) {
    case "ADD_HEROES":
      //add action array of heroes!!!
      console.log("SWEET, i am so lost");
      console.log(action.heroes);
      return [...action.heroes, ...state];
    case "ADD_HERO":
      return [...state, action.hero];
    case types.EDIT_HERO:
      //do logic to edit hero
      return state;

    default:
      return state;
  }
}
