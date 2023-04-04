import Landing from "./components/user/Landing";
import MainFeed from "./components/feed/MainFeed";
import { useState } from "react";
// Handle data for login user
// TODO CHANGE PROPS TO DATA RECEIVED FROM API
function App() {
  const [currentState,setCurrentState] = useState("land");
  const [currentEmotion, setCurrentEmotion] = useState("");
  const updateState = (state) => {
    setCurrentState(state);
  }
  const updateCurrentEmotion = (emotion) => {
    setCurrentEmotion(emotion);
  }
  return (
  <div className = 'h-screen bg-gradient-to-l from-purple-600 via-pink-300 to-blue-400'>
   {currentState === 'land' && <Landing
   name = "DEMO"
   updateStateHandle = {updateState}
   updateCurrentEmotion = {updateCurrentEmotion}/>
  }
  {currentState === 'feed' && <MainFeed
  currentEmotion = {currentEmotion}
  updateStateHandle = {updateState}/>
  }
   </div>
  );
}
export default App;
