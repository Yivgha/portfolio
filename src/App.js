import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Home/Footer";
import PrivacyPolicy from "./Pages/Privacy/PrivacyPolicy";
import ErrorPage from "./Pages/404";
import Terms from "./Pages/Privacy/TermsOfService";
import Cookies from "./Pages/Privacy/Cookies";
import "./styles/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsofservice" element={<Terms />} />
          <Route path="cookiesettings" element={<Cookies />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
