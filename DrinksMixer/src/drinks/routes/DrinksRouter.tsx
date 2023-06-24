import { Navigate, Route, Routes } from "react-router-dom";
import { Cocktails } from "../pages/Cocktails";
import { Coctkail } from "../pages/Coctkail";

export const DrinksRouter= () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Cocktails />} />
          <Route path="cocktail/:cocktailId" element={<Coctkail />} />
        </Routes>
      </div>
    </>
  );
};