import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
