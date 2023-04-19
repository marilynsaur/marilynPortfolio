import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import IndividualProjects from "./components/IndividualProjects";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import Animation from "./components/Animation";
import About from "./components/About";
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="individualProjects" element={<IndividualProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ProjectPage" element={<ProjectPage />} />
          <Route path="Animation" element={<Animation />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);