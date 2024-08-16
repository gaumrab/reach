import React from "react";
import { MdEmail } from "react-icons/md";

function End({theme}){
    return <>
    <div className="end">
     <div className="end1">
     <h4 id={`${!theme?"WHITE":""}`}>Lead Details</h4>
     <p><span>Name : </span>mitrajit</p>
     <p><span>Contact No:</span> +54 9062827869</p>
     <p><span>Email:</span> mitrajit2022@gmail.com</p>
     <p><span>Linkedin:</span> linkedin.com/in/mitrajit</p>
     <p><span>Company Name:</span> Reachinbox</p>
     </div>
     <div className="end1">
     <h4 id={`${!theme?"WHITE":""}`}>Compaign Details</h4>
     <p><MdEmail style={{fontSize:30}}/>Step1:Email <br /> sent 3rd,Feb</p>
     <p><MdEmail style={{fontSize:30}}/>Step2:Email <br /> Opened 5th,Feb</p>
     <p><MdEmail style={{fontSize:30}}/>Step4:Email <br /> sent 7th,Feb</p>
     <p><MdEmail style={{fontSize:30}}/>Step5:Email <br /> Opened 8th,Feb</p>
     <p><MdEmail style={{fontSize:30}}/>Step6:Email <br /> Opened 9th,Feb</p>
     <p><MdEmail style={{fontSize:30}}/>Step7:Email <br /> sent 3rd,March</p>
     </div>
     </div>
    </>
}

export default End;
