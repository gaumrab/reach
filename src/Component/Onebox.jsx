import React from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Head from './Head';
function Onebox({theme,Change}){
    return <>
   
    <div className="main">
     <Menubar theme={theme}/>
     <Head theme={theme} Change={Change}/>
     </div>
     <Navbar theme={theme}/>
    </>
}

export default Onebox;
