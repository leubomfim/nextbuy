import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

export const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};
