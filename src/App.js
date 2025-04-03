import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Story from "./Components/Story";
import Characters from "./Components/Characters";
import Fights from "./Components/Fights";
function App() {
  return (  
  <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/fights" element={<Fights />} />
        <Route path="/story" element={<Story />} />
    </Routes>
    
  </Router>
  );
}

export default App;
