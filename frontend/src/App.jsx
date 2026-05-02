import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";

// Import your pages
import Home from "./Pages/Home";
//import About from "./pages/About";
//import Programs from "./pages/Programs";
//import GetInvolved from "./pages/GetInvolved";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
         {/* Navbar is OUTSIDE Routes → shows everywhere */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/programs" element={<Programs />} /> */}
        {/* <Route path="/get-involved" element={<GetInvolved />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

