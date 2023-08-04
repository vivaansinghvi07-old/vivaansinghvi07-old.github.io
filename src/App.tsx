import React from "react";
import Projects from "./components/Projects";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Hello() {
  return <p>Hello world!</p>
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
