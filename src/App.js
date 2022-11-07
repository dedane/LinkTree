import Home from "../src/Pages/Home";
import Contacts from "../src/Pages/Contacts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;