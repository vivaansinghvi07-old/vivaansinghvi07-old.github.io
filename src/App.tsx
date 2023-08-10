import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { Route, Routes } from "react-router-dom";

function Hello() {
  return <p>Hello world!</p>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
