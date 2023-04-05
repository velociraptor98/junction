import CardGroup from "./CardGroup";
function MainFeed(props) {
    let emoText = ""
    if (props.currentEmotion === "happy") {
        emoText = "these might interest you!"
    }
    else if (props.currentEmotion === "sad") {
        emoText = "this might cheer you up!"
    }
    else if (props.currentEmotion === "angry") {
        emoText = "these might help you vent!"
    }
    else if (props.currentEmotion === "indifferent") {
        emoText = "these might help you get out of a funk!"
    }
    else if (props.currentEmotion === "ecstatic") {
        emoText = "these might interest you!"
    }
    else {
        emoText = "we have some things that might interest you!"
    }    
    return (
        <div className="w-1/3 h-5/6 flex-col space-evenly item-center">
            <h3 className="text-xl mb-1 text-gray-200 pb-2">
                {`Since you were feeling ${props.currentEmotion}, ` + emoText}
            </h3>
            <CardGroup currentEmotion = {props.currentEmotion || "Happy"} />
        </div>

    )
}
export default MainFeed;