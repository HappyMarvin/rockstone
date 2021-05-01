import "./Messages.css"

function Messages ({ messages }) {

  return (
    <ul className="messages">
      {messages.map(message => <ul className="messages__item">
        {message}
      </ul>)}
    </ul>
  )
}

export default Messages