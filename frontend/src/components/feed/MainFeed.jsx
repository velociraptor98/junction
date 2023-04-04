import CardGroup from "./CardGroup";
function MainFeed(props) {
    return (
        <div className="w-2/3 flex-col space-evenly">
            <h3 className="text-2xl mb-8 text-gray-200">
                {`In case you were feeling, ${props.currentEmotion}`}
            </h3>
            <CardGroup currentEmotion = {props.currentEmotion || "Happy"} />
        </div>

    )
}
export default MainFeed;