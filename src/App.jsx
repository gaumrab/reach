import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import LogIn from "./Component/LogIn";
import Onebox from "./Component/Onebox";
function App(){
  let [state,setState] = new useState(true);
  let [theme,setTheme] = new useState(true);
  function change(state){
    setState(!state);
  }
  function Change(theme){
    setTheme(!theme);
  }

  return <>
    {state?<Onebox theme={theme} Change={Change}/>:<LogIn state={state} change={change}/>}
  </>
}

export default App;
