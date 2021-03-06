import { setGlobal, addCallback } from "reactn"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";


import './App.css';

function App() {
  
  return (
    <>
    
   
    <Router>
      
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" />
      </Routes>
    
    </Router>
    </>


      
      
    
  );
}


export default App;

        

