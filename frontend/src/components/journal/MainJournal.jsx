import Emoji from "../user/Emoji";
import { useState } from "react";
function MainJournal() {
    const [textEmo,setTextEmo] = useState("");
    const emotionSelector = (emotion) => {
        setTextEmo(emotion);
    }
    const handleSubmission = () => {
        let textValue = document.getElementById("messageArea").value;
        console.log(textValue);
        const payload = {
            'text' : textValue,
            'textSentiment' : textEmo
        }
        console.log(payload);
        // Replace with the axios call to save the journal entry
    }
    return (
        <div className="h-2/3 flex flex-col space-y-4 items-center justify-center"> 
            <h2 className="text-4xl font-bold mb-2 text-white flex-auto ml-auto mr-auto">
                Journal Entry
            </h2>
            <textarea
                spellCheck="true"
                id="messageArea"
                rows="20"
                className="shadow-lg shadow-slate-300 rounded-lg block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here...">
            </textarea>
            <Emoji
            clickHandler = {emotionSelector}/>
            <button
            onClick={() => handleSubmission()} 
            type="button" 
            className="w-1/5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Submit
            </button>
        </div>
    );
}
export default MainJournal;