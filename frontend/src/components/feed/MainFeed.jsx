import CardGroup from "./CardGroup";
function MainFeed(props) {

    // check if the current emotion is happy
    // if it is, then display the happy feed
    // if it is not, then display the sad feed

    let emoText = ""

    if (props.currentEmotion === "happy") {
        emoText = "we have some things that might interest you!"
    }
    else if (props.currentEmotion === "sad") {
        emoText = "we have some things that might cheer you up!"
    }
    else if (props.currentEmotion === "angry") {
        emoText = "we have some things that might help you vent!"
    }
    else if (props.currentEmotion === "indifferent") {
        emoText = "we have some things that might help you get out of your funk!"
    }
    else if (props.currentEmotion === "ecstatic") {
        emoText = "we have some things that might interest you!!"
    }
    else {
        emoText = "we have some things that might interest you!"
    }

    
    return (
        <div className="w-1/3 flex-col space-evenly item-center">
            <h3 className="text-xl mb-2 text-gray-200 pb-2">
                {`Since you were feeling ${props.currentEmotion}, ` + emoText}
            </h3>
            <CardGroup currentEmotion = {props.currentEmotion || "Happy"} />
        </div>

    )
}
export default MainFeed;