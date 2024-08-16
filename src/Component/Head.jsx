import React from "react";
import DarkMode from "./DarkMode";
function Head(){
    return <>
     <div className="head">
        <h6>Onebox</h6>
        <div className="subDiv1">
        <DarkMode />
        <select>
            <option>Tim's Workspace</option>
        </select>
        </div>
     </div>
    </>
};

export default Head;