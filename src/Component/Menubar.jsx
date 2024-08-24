import React from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import img from "../assets/lightM.png";


function Menubar({theme}){
    return <>
     <div className="red">
      <img src={img} alt="logo" />
     </div>
      <div className="two" id={`${!theme?"WHITE":""}`}>
        <div className="subdiv1">
            <a href="#"><button><IoMdContact/></button></a>
            <a href="#"><button><MdEmail/></button></a>
            <a href="#"><button><FaLocationArrow/></button></a>
            <a href="#"><button><FaServer/></button></a>
            <a href="#"><button><FaInbox/></button></a>
            <a href="#"><button><BsFileBarGraph/></button></a>
            <a href="#"><button><AiFillHome/></button></a>
        </div>
        <div className="subdiv2">
            <h6>MR</h6>
        </div>
      </div>
    </>
}

export default Menubar;
