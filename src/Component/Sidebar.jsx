import React, { useEffect,useState } from "react";
import { IoReload } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Cards from "./Cards";
function Sidebar({ value }) {
  let arr = [
    {
      fromEmail: "xyz@gmail.com",
      subject: "meeting1",
      toEmail: "abc@gmail.com",
      isRead: "true",
      sentAt: "2023-11-23T07:38:46.000Z",
    },
    {
      fromEmail: "abhishek@gmail.com",
      subject: "meeting2",
      toEmail: "abc@gmail.com",
      isRead: "false",
      sentAt: "2023-11-23T07:38:46.000Z",
    },
  ];
  let [BIGDATA, setBIGDATA] = new useState(arr);
  let [index,setIndex] = new useState(0);
 
  function change(Index) {
    setIndex(Index);
    console.log("Hello", index);
  }
  useEffect(() => {
    document.addEventListener("keydown", detectKey, true);
  }, []);
  function detectKey(key) {
    if (key.key == "D") {
    
      let newArr = [];
      for(let i in BIGDATA){
        if(i!=index){
          newArr.push(BIGDATA[i]);
        }
      }
      setBIGDATA(newArr);
      confirm("Are you sure. Your Selected email will be deleted.");
    }
  }

  return (
    <>
      <div className="bar">
        <div className="subpart1">
          <h3>All Inbox(s)</h3>
          <span>
            <IoReload />
          </span>
        </div>
        <p>Inboxes Selected</p>
        <div className="search">
          <span>
            <CiSearch />
          </span>
          <input type="text" placeholder="Search" />
        </div>
        <div className="new">
          <div className="newsub1">
            <h6 id="twenty">26</h6>
            <h6>New Replies</h6>
          </div>
          <select>
            <option>Newest</option>
          </select>
        </div>
        {value.map((data, index) => {
          return (
            <Cards key={index} Index={1233} change={change} value={data} />
          );
        })}
        {BIGDATA.map((data, index) => {
          return (
            <Cards key={index} Index={index} change={change} value={data} />
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
