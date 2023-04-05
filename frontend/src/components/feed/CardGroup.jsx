import CardItem from "./CardItem";
import { useState, useEffect } from "react";
import axios from "axios";

function CardGroup(props) {
    // Use a simple iteration logic to get the current counter
    const [currentCounter, setCurrentCounter] = useState(0);
    const [itemList, setItemList] = useState([]);
    const [eventData, setEventData] = useState([]);
    const selectionHandler = (select) => {
        let tempArray = itemList;
        // get the tag of the event 
        axios.post(`http://localhost:3500/events/tags`, { event_id: select.key, tag_value: select.value })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        tempArray.push(select);
        setItemList(tempArray);
        if (currentCounter < eventData.length && eventData.length > 0) {
            setCurrentCounter(currentCounter + 1);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost:3500/events?tag=${props.currentEmotion}`);
            if (data) {
                setEventData(data.data);
                console.log(data.data);
            }
        }
        fetchData().catch(console.error);
    }, [])

    return (
        <div>
            {
                eventData[currentCounter] ?
                    <CardItem data={eventData[currentCounter]}
                        selectionHandlerHandle={selectionHandler} /> :
                    <h3 className="text-2xl mb-8 text-gray-200">
                        No more events for the day
                    </h3>
            }
        </div>
    )
}
export default CardGroup;