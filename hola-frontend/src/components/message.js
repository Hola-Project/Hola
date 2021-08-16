

import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
{own? (
      <p className='Chat__message Chat__reciever'>
        
        {message.text}
        <span className='Chat__time'>{format(message.createdAt)}</span>
      </p>
    ) :(
      <p className='Chat__message '>
        <span className='Chat__name'>{message.username}</span>
        {message.text}
        <span className='Chat__time'>{format(message.createdAt)}</span>
      </p>
   ) }

      {/* <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>*/}
    </div>
  );
}
