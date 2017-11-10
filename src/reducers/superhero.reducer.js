const initState = [{ name: "Superman", skill: "none" }];

export default function heroes(state = initState, action) {
  switch (action.type) {
    case "ADD_HERO":
      return state;
    case "EDIT_HERO":
      //do logic to edit hero
      return state;

    default:
      return state;
  }
}
