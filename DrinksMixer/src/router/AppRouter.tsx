import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";
import { Login } from "../auth/pages/Login";
import { DrinksRouter } from "../drinks/routes/DrinksRouter";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='/*' element ={
          <PrivateRouter>
<DrinksRouter/>
          </PrivateRouter>
        } />
      </Routes>
    </>
  );
}
