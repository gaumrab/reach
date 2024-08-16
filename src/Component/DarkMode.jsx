import React, { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

import "./DarkMode.css";

const DarkMode = () => {
  
    return (
        
        <div className='dark_mode'>
            <input 
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            
            <label className='dark_mode_label' for='darkmode-toggle'>
             <MdWbSunny />
             <FaRegMoon />
            </label>
        </div>
    );
};

export default DarkMode;