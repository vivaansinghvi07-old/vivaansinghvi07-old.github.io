import React from "react";
import Projects from "./components/Projects";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
