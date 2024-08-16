import React from "react";
import { Routes,Route } from "react-router-dom";
import LogIn from "./Component/LogIn";
import Onebox from "./Component/Onebox";
function App(){
  return <>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/onebox" element={<Onebox/>}/>
    </Routes>
  </>
}

export default App;
