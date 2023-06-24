import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";
import { AuthProviderProps } from "../../Types";

export const PublicRoute = ({children}:AuthProviderProps )=> {
  const {logged}=useContext(AuthContext)
  return (logged)
  ? <Navigate to="/" />
  : children
}
