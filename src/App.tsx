import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
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
      </Routes>
    </>
  );
}

export default App;
