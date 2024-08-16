import React from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Head from './Head';
function Onebox(){
    return <>
   
    <div className="main">
     <Menubar/>
     <Head />
     </div>
     <Navbar />
    </>
}

export default Onebox;