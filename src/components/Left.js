import './Left.css';
import {useState} from "react";
import Form from "./Form";
import Messages from "./Messages";

function Left ({ isHidden }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  }

  return (
    <div className={`left ${ isHidden ? 'left_hidden' : '' }`}>
      <div className="left__inner">
        <Form addMessage={addMessage} />
        <Messages messages={messages} />
      </div>
    </div>
  )
}

export default Left