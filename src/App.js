/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import MoviePage from "./components/MoviePage";
import SearchLandingPage from "./components/SearchLandingPage";
import "./App.css";
import { Update } from "@mui/icons-material";
import UpdatePage from "./components/UpdatePage";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/movie/details/:id" element={<MoviePage />} />
          <Route exact path="/update" element={<UpdatePage/>}/>
          <Route exact path="/movie/search/:search"element={<SearchLandingPage/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
