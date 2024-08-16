import react, { useState,useEffect } from 'react';
import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { IoLink } from "react-icons/io5";
import { MdImage } from "react-icons/md";
import { FaFaceSmile } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { MdOutlineReply } from "react-icons/md";





function Center({theme,value}){
   let array = [
      {launch: "New Launch",from:"abhi@gmail.com",to:"user2@gmail.com",date:"20-june 2022 - 2023",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione laboriosam perspiciatis. Voluptas similique tenetur repudiandae incidunt officia eos nemo consequuntur."},
      {launch: "Pre Launch",from:"lovedeep@gmail.com",to:"user3@gmail.com",date:"21-May 2022 - 2023",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione laboriosam perspiciatis. Voluptas similique tenetur repudiandae incidunt officia eos nemo consequuntur."},
   ];
   let [reply,setReply] = new useState(array);
   let [val,setVal] = useState(false);
   useEffect(() => {
      document.addEventListener("keydown", detectKey, true);
    }, []);

    function detectKey(event) {
      if(event.key == 'R'){
        setVal(true);
      }
    }
    const [data,setData] = useState({launch:"",from:"",to:"",desc:"",date:"21-May 2022 - 2023"})
    function Add(){
      let newArr = [];
      for(let i of reply){
          newArr.push(i);
      }
      newArr.push(data);
      setReply(newArr);
      setVal(false);
    }

   return <>
   <div className="ceenter">
      <div className="Info">
        <div className="name">
        <h5>{value.toEmail.substring(0,8)}</h5>
        <h6 style={{color:"gray"}}>{value.toEmail}</h6>
        </div>
        <div className='Info1' >
        <div id={`${!theme?"WHITE":""}`} className='Infoone'><FaCircle className='ii'/>Meeting Completed<FaAngleDown className='ii' /></div>
        <p id={`${!theme?"WHITE":""}`} className='Infoone'>Move<FaAngleDown className='ii' /></p>
        <p id={`${!theme?"WHITE":""}`} className='Infoone'>...</p>
        </div>
      </div>
      {
         reply.map((data,index)=>{
            return <div key={index} className="para" id={`${!theme?"WHITE":""}`}>
            <div className="part1">
            <h5 style={{color:"white"}}>{data.launch}</h5>
            <h5>from:{data.from}</h5>
            <h5>to: {data.to}</h5>
            <h6>Hi(First_Name)</h6>
            <p>{data.desc}</p>
            </div>
            <h3>{data.date}</h3>
         </div>
         })
      }

      <div className={`${val?"v REPLY":"n"}`} id={`${!theme?"WHITE":""}`}>
         <p>Reply</p>
         <div onChange={(event)=>setData({...data,to:event.target.value})} className='onee'><label>To: </label><input  id={`${!theme?"WHITE":""}`} type="email" /></div>
         <div onChange={(event)=>setData({...data,from:event.target.value})} className='onee'><label>From: </label><input  id={`${!theme?"WHITE":""}`} type="email" /></div>
         <div onChange={(event)=>setData({...data,desc:event.target.value})}  className='onee'><label>Subject: </label><input  id={`${!theme?"WHITE":""}`} type="text" /></div>
         <textarea onChange={(event)=>setData({...data,desc:event.target.value})} cols={100} rows={12}  id={`${!theme?"WHITE":""}`}>Hii,</textarea>

         <div  className="bottom mt-3">
            <button onClick={()=>Add()} className="btn btn-primary">Send <FaCaretDown /></button>
            <button style={{color:"gray"}} className="btn ms-2"><BsLightningChargeFill /> Variables</button>
            <button style={{color:"gray"}} className="btn"><LuEye />Preview Email</button>
            <span style={{color:"gray"}}>A</span>
            <button  id={`${!theme?"WHITE":""}`}  className='llink ms-3'><IoLink /></button>
            <button  id={`${!theme?"WHITE":""}`}  className='llink ms-3'> <MdImage /></button>
            <button  id={`${!theme?"WHITE":""}`}  className='llink ms-3'><FaFaceSmile /></button>
            <button  id={`${!theme?"WHITE":""}`}  className='llink ms-3'><FaUser /></button>
            <button  id={`${!theme?"WHITE":""}`} className='llink ms-3'><IoCode /></button>
         </div>
        
      </div>
   </div>
   <button onClick={()=>setVal(true)} className='btn btn-primary rreply'><MdOutlineReply /> Reply</button>
   </>
}
export default Center;
