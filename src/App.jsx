import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import LogIn from "./Component/LogIn";
import Onebox from "./Component/Onebox";
function App(){
  let [state,setState] = new useState(false);
  let [theme,setTheme] = new useState(false);
  function change(state){
    confirm("Dear ReachinBox Hiring Team, I have created a default user account for your review. Please log in to verify the functionality. Click “OK” to proceed.")
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
