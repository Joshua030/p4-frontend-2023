import { types } from "./types";
import {Action, State} from "../../../Types"

export const authReducer = (state:State, action:Action):State => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.payload,
        logged: true,
      };

    case types.logout:
      return {
        ...state,
        user: "",
        logged: false,
      };
    default:
      return state;
  }
};
