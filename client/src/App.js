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
import Type from "./pages/type/Type";
import Type2 from "./pages/type2/Type2";
import Type3 from "./pages/type3/Type3";
import Type4 from "./pages/type4/Type4";
import Type5 from "./pages/type5/Type5";

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
        <Route path="/star1" element={<Type/>}/>
        <Route path="/star2" element={<Type2/>}/>
        <Route path="/star3" element={<Type3/>}/>
        <Route path="/star4" element={<Type4/>}/>
        <Route path="/star5" element={<Type5/>}/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
