import { useReducer } from "react";
import { authReducer } from "./AuthReducer";
import { types } from "./types";
import { AuthProviderProps } from "../../../Types";
import { AuthContext } from "./AuthContext";

const initialState = {
  logged: false,
  user:""
}

const init = ()=> {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return {
    user: user || undefined,
    logged: !!user,
  };
};


export const AuthProvider = ({ children} : AuthProviderProps) => {

 const [authState,dispatch] = useReducer(authReducer, initialState,init);
 
 const login = (name:string)=>{
  const user= name;
  const action ={
      type: types.login,
      payload: user
  }

  localStorage.setItem('user', JSON.stringify(user));

  dispatch(action);
 }

 const logout = () => {
  localStorage.removeItem('user');
  const action = {
    type: types.logout,
  }
  dispatch(action)
 }
return ( 
<AuthContext.Provider value={{
  ...authState,
  login,
  logout
}}>
  {children}
  </AuthContext.Provider>
)};
