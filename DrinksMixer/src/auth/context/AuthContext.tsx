import { createContext } from "react";
import { AuthContextValue } from "../../../Types";


export const AuthContext = createContext<AuthContextValue>({
  logged: false,
  user: '',
  login: () => {},
  logout: () => {},
});
