import React from "react";
import DarkMode from "./DarkMode";
function Head({theme,Change}){
    return <>
     <div className="head" id={`${!theme?"WHITE":""}`}>
        <h6>Onebox</h6>
        <div className="subDiv1">
        <DarkMode theme={theme} Change={Change}/>
        <select style={{marginTop:'5px'}} id={`${!theme?"WHITE":""}`}>
            <option>Tim's Workspace</option>
        </select>
        </div>
     </div>
    </>
};

export default Head;
