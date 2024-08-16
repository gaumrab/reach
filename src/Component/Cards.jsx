
import { FaCircle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
function Cards({value,Index,change}){
    let date = value.sentAt.substring(6,10);
  
   
    return <>
     <div className="Card">
               <div className="cardsub1">
                  <div className="gmailpart">
                  <div className="point"></div>
                  <h6>{value.fromEmail}</h6>
                  </div>
                  <p>{date}</p>
               </div>
                <p>{value.subject}</p>
                <div className="cardsub2">
                <button onClick={()=>change(Index)} className={`${!value.isRead?"safe":"danger"}`}><FaCircle />
                {
                    !value.isRead?"Interested":"closed"
                }
                </button>
                <p className="p1"><FaLocationArrow />compaign name</p>
                </div>
        </div>
    </>
}
export default Cards;