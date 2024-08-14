
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Single from "./pages/Single";
import Wishlist from "./pages/Wishlist";
import NOTfound from "./pages/NOTfound"
import { useState } from "react";

function App() {
  const [clicked, setclicked] = useState(false);


  return (
    <div className="App">
        <BrowserRouter>
       <div style={{marginBottom:"60px"}}> <Navbar/></div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/single" element={<Single setclicked={setclicked} clicked={clicked}/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path="/*" element={<NOTfound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
