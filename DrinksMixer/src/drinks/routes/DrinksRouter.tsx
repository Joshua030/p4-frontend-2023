import { Navigate, Route, Routes } from "react-router-dom";
import { Cocktails } from "../pages/Cocktails";
import { Coctkail } from "../pages/Coctkail";
import { NavBar } from "../../ui/NavBar";

export const DrinksRouter= () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Cocktails />} />
          <Route path="cocktail/:cocktailId" element={<Coctkail />} />
        </Routes>
      </div>
    </>
  );
};