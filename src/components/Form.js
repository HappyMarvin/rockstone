import "./Form.css"
import {useState} from "react";

function Form ({ addMessage }) {
  const [textInput, setTextInput] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    addMessage(textInput);
  }

  function changeInput (e) {
    setTextInput(e.target.value)
  }

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
          <textarea
            name="left-input"
            id="left-input"
            className="form__input"
            placeholder="Введите текст"
            value={textInput}
            onChange={changeInput}
          />
      <button
        type={`submit`}
        className="form__submit"
      >Send</button>
    </form>
  )
}
export default Form