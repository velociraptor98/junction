import Landing from "./components/user/Landing";
import MainFeed from "./components/feed/MainFeed";
import { useState, useEffect } from "react";
import MainJournal from "./components/journal/MainJournal";
import Helpline from "./components/helpline/Helpline";
import { Button } from "flowbite-react";
// Handle data for login user
// TODO CHANGE PROPS TO DATA RECEIVED FROM API
function App() {
  const [currentState, setCurrentState] = useState("land");
  const [currentEmotion, setCurrentEmotion] = useState("");
  const [currentPallete, setCurrentPallete] = useState("bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500")
  const updateState = (state) => {
    setCurrentState(state);
  }
  const updateCurrentEmotion = (emotion) => {
    console.log("CHANGED EMOTION");
    setCurrentEmotion(emotion);
  }

  useEffect(() => {
    console.log("IN this block");
    if (currentEmotion === 'cry') {
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
  return (
    <div>
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
      <nav className={`${currentPallete}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jump</span>
          </a>
          <div class="flex items-center space-evenly">
            {/* <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a> */}
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
          name="DEMO"
          updateStateHandle={updateState}
          updateCurrentEmotion={updateCurrentEmotion} />
        }
        {currentState === 'feed' && <MainFeed
          currentEmotion={currentEmotion}
          updateStateHandle={updateState} />
        }
        {currentState === 'journal' && <MainJournal />}
        {currentState === 'help' && <Helpline />}
      </div>
    </div>
  );
}
export default App;
