import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Wallpaper from "./components/Wallpaper.jsx";
import Contact from "./components/Contact.jsx";
import Learning from "./components/Learning.jsx";
import LearningDetail from "./components/LearningDetail.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallpaper" element={<Wallpaper />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/learning/:id" element={<LearningDetail />} />
    
    
    </Routes>
  );
}

export default App;
