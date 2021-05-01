import './Right.css';
import {useEffect, useState} from "react";

function Right() {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimer(date.toLocaleTimeString('en-GB'));
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`right`}>
      <div className="right__inner">
        <p className={`right__clock`}>{timer}</p>
      </div>
    </div>
  )
}

export default Right