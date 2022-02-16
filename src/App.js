/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import SearchLandingPage from "./pages/SearchLandingPage";
import UpdatePage from "./pages/UpdatePage";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/movie/details/:id" element={<MoviePage />} />
          <Route exact path="//movie/update/:id" element={<UpdatePage/>}/>
          <Route exact path="/movie/search/:search"element={<SearchLandingPage/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
