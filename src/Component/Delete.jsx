import React from "react";

function Delete({check}){
    return <>
      <div className="D">
         <div className="Delete">
            <h1>Are you sure?</h1>
            <p>You selected email will be deleted.</p>
            <div className="butt">
                <button onClick={()=>check(0)} id="bb" className="btn p-3">Cancel</button>
                <button onClick={()=>check(1)} className="btn p-3 bg-danger text-light">Delete</button>
            </div>
         </div>
      </div>
    </>
}

export default Delete;