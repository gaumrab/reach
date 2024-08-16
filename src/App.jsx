import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import LogIn from "./Component/LogIn";
import Onebox from "./Component/Onebox";
function App(){
  let [state,setState] = new useState(false);
  function change(state){
    setState(true);
  }
  return <>
    {state?<Onebox/>:<LogIn state={state} change={change}/>}
  </>
}

export default App;
