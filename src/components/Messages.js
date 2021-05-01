import "./Messages.css"

function Messages({messages}) {

  function randomColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  }

  return (
    <ul className="messages">
      {messages.map((message, index) => <li className="messages__item" key={index}>
        <span className="messages__decor" style={{ backgroundColor: randomColor() }}></span>
        <p className="messages__text">{message}</p>
      </li>)}
    </ul>
  )
}

export default Messages