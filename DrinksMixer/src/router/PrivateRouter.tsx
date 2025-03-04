import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate,useLocation } from "react-router-dom";
import { AuthProviderProps } from "../../Types";


export const PrivateRouter = ({children}:AuthProviderProps) => {
  const {logged}=useContext(AuthContext)
  const {pathname, search} = useLocation ();
  const lastpath = pathname+search;
  localStorage.setItem('lastPath',lastpath)
return (logged)
? children
: <Navigate to="/login" />
}

