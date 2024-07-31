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
      <Background />
      <Header />
      <Routes>
        <Route path="/old" element={<MainPage />} />
        <Route path="/old/projects" element={<Projects />} />
        <Route path="/old/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
