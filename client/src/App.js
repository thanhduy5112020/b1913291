import React from "react";
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";
// import New from "./new/New";
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import { Login } from "./pages/login/Login";
import {Register} from "./pages/register/Register";
import { VietnamProperty } from "./components/vietnamProperties/VietnamProperty";
import { FranceProperty } from "./components/franceProperties/FranceProperty";
import { JapanProperty } from "./components/japanProperty/JapanProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/vietnam" element={<VietnamProperty/>}/>
        <Route path="/france" element={<FranceProperty/>}/>
        <Route path="/japan" element={<JapanProperty/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
