import { setGlobal, addCallback } from "reactn"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";



import './App.css';

function App() {
  return (
    <Router>
      <Signup />
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" />
        <Route path="*" />


      </Routes> */}
    </Router>
    
  );
}

export default App;
