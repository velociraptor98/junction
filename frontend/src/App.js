import Landing from "./components/user/Landing";
import MainFeed from "./components/feed/MainFeed";
import { useState, useEffect } from "react";
import MainJournal from "./components/journal/MainJournal";
import Helpline from "./components/helpline/Helpline";
import { Button } from "flowbite-react";
import axios from "axios";
function App() {
  const [currentState, setCurrentState] = useState("land");
  const [currentEmotion, setCurrentEmotion] = useState("");
  const [currentPallete, setCurrentPallete] = useState("bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500")
  const [userInfo,setUserInfo] = useState("");
  const updateState = (state) => {
    setCurrentState(state);
  }
  const updateCurrentEmotion = (emotion) => {
    setCurrentEmotion(emotion);
  }

  useEffect(() => {
    if (currentEmotion === 'sad') {
      setCurrentPallete("bg-gradient-to-r from-blue-400 to-emerald-400");
    }
    else if (currentEmotion === 'indiff') {
      setCurrentPallete("bg-gradient-to-r from-violet-300 to-violet-400");
    }
    else if (currentEmotion === 'happy') {
      setCurrentPallete("bg-gradient-to-r from-green-200 via-green-300 to-blue-500");
    }
    else if (currentEmotion === 'ecstatic') {
      setCurrentPallete("bg-gradient-to-b bg-gradient-to-tr from-violet-500 to-orange-300");
    }
    else {
      setCurrentPallete("bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500");
    }
  }, [currentEmotion]);

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await axios.get('http://localhost:3500/users/');
      if(data){
        setUserInfo(data.data[0]);
        console.log(data.data[0]);
      }
    }
    fetchData().catch(console.error);
  },[])
  return (
    <div>
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
      <nav className={`${currentPallete}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hopp</span>
          </a>
          <div className="flex items-center space-evenly">
            <Button
            onClick={()=>updateState("journal")}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-sm rounded-lg text-sm px-1 py-1.5 text-center mr-2 mb-2">
              Journal
            </Button>
            <Button
            onClick={()=>updateState("feed")}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-sm rounded-lg text-sm px-1 py-1.5 text-center mr-2 mb-2">
              Events
            </Button>
            <Button
            onClick={()=>updateState("help")}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-sm rounded-lg text-sm px-1 py-1.5 text-center mr-2 mb-2">
              Helpline
            </Button>
          </div>
        </div>
      </nav>
      <div className={`h-screen ${currentPallete} flex items-center justify-center h-screen`}>
        {currentState === 'land' && <Landing
          name = { userInfo.username || "demo user"}
          updateStateHandle={updateState}
          updateCurrentEmotion={updateCurrentEmotion} />
        }
        {currentState === 'feed' && <MainFeed
          currentEmotion={currentEmotion}
          updateStateHandle={updateState} />
        }
        {currentState === 'journal' && <MainJournal 
        userInfo = {userInfo}/>}
        {currentState === 'help' && <Helpline />}
      </div>
    </div>
  );
}
export default App;
