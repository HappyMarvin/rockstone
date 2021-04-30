import './Left.css';

function Left ({ isHidden }) {

  return (
    <div className={`left ${ isHidden ? 'left_hidden' : '' }`}>
      <p>Left</p>
    </div>

  )
}

export default Left