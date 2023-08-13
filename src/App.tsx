import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
