import './App.css';
import Left from "./Left";
import Right from "./Right";
import {useSwipeable} from "react-swipeable";
import {useState} from "react";

function App() {

  const [leftHidden, setLeftHidden] = useState(false);

  const handlerSwipeRight = () => {
    console.log('swipe right')
    setLeftHidden(false)
  }

  const handlerSwipeLeft = () => {
    console.log('swipe left')
    setLeftHidden(true)
  }

  const swipeHandlers = useSwipeable({
    onSwipedRight: handlerSwipeRight,
    onSwipedLeft: handlerSwipeLeft,
  })

  return (
    <div className="App">
      <div className="container" {...swipeHandlers}>
        <div className="container-inner">
        <Left className="left" isHidden={leftHidden} />

        <Right className="right" />
        </div>
      </div>
    </div>
  );
}

export default App;
