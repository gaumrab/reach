import React, { useEffect,useState } from "react";
import { IoReload } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Cards from "./Cards";
import Delete from "./Delete";
function Sidebar({ theme,value }) {
  let arr = [
    {
      fromEmail: "xyz@gmail.com",
      subject: "meeting1",
      toEmail: "abc@gmail.com",
      isRead: false,
      sentAt: "2023-11-23T07:38:46.000Z",
    },
    {
      fromEmail: "abhishek@gmail.com",
      subject: "meeting2",
      toEmail: "abc@gmail.com",
      isRead: true,
      sentAt: "2023-11-23T07:38:46.000Z",
    },
    {
      fromEmail: "shaw@getmemeetings.com",
      subject: "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      toEmail: "abc@gmail.com",
      isRead: true,
      sentAt: "2023-11-23T07:38:46.000Z",
    },
    {
      fromEmail: "shaw@getmemeetings.com",
      subject: "Test mail",
      toEmail: "abc@gmail.com",
      isRead: false,
      sentAt: "2023-11-23T07:38:46.000Z",
    }
  ];
  let [BIGDATA, setBIGDATA] = new useState(arr);
  let [index,setIndex] = new useState(0);
  let [DBox,setDBox] = new useState(false);
 
  function change(Index) {
    setIndex(Index);
    console.log("Hello", index);
  }
  useEffect(() => {
    document.addEventListener("keydown", detectKey, true);
  }, []);
  function detectKey(key) {
    if (key.key == "D") {
      setDBox(true);
    }
  }
  function check(check){
    if(check == 1){
      alert("If you attempt to delete a user without selecting one, the system will default to deleting the first user. The user ID of the first user will be passed to the API for deletion. Otherwise it will delete your selected user.")
      let newArr = [];
      for(let i in BIGDATA){
        if(i!=index){
          newArr.push(BIGDATA[i]);
        }
      }
      setBIGDATA(newArr);
    }
    setDBox(false);
  }

  return (
    <>
      {DBox?<Delete check={check}/>: ""}
      <div className="bar" id={`${!theme?"WHITE":""}`}>
        <div className="subpart1">
          <h3>All Inbox(s)</h3>
          <span id={`${!theme?"WHITE":""}`}>
            <IoReload />
          </span>
        </div>
        <p>Inboxes Selected</p>
        <div className="search">
          <span id={`${!theme?"WHITE":""}`}>
            <CiSearch />
          </span>
          <input id={`${!theme?"WHITE":""}`} type="text" placeholder="Search" />
        </div>
        <div className="new" >
          <div className="newsub1">
            <h6 id="twenty">26</h6>
            <h6>New Replies</h6>
          </div>
          <select>
            <option>Newest</option>
          </select>
        </div>
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
