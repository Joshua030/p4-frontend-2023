import { Navigate, Route, Routes } from "react-router-dom";
import { Cocktails } from "../pages/Cocktails";

export const DrinksRouter= () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Cocktails />} />
          {/* <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchHero />} />
          <Route path="hero/:heroId" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} /> */}
        </Routes>
      </div>
    </>
  );
};