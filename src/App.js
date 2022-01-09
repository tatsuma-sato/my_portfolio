import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Header from "./pages/Header";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      {/* // <Routes>
      // <Route path="/" exact element={<Header />}> */}
      <Header />
      <div className="container">
        <Hero />
      </div>
      {/* // </Route>
    // </Routes> */}
    </>
  );
}

export default App;
