import Emoji from "./Emoji";
function Landing(props) {

    const clickHandler = (emotion) => {
        // Fill over the code for handling the next pages
        props.updateStateHandle("feed");
        props.updateCurrentEmotion(emotion);
    }
    return (
        <div className="container px-6 flex-col justify-evenly">
            <h2 className="text-4xl font-bold mb-2 text-white flex-auto ml-auto mr-auto">
                {`Hey, ${props.name}`}
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
                How are you feeling today? 
            </h3>
            <Emoji
            clickHandler = {clickHandler}/>
        </div>        
    )
}
export default Landing;