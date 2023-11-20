import { BrowserRouter, Routes, Route } from "react-router-dom";
import nav from "./components/nav"
import landing from "./components/pages/landing";
import home from "./components/pages/home";
import about from "./components/pages/about";
import projects from "./components/pages/projects";
import contact from "./components/pages/contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <nav />
      <Routes>
        <Route path="/landing" element={<landing />} />
        <Route path="/home" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
