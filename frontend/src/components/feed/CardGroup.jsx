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
        tempArray.push(select);
        setItemList(tempArray);
        if (currentCounter < eventData.length && eventData.length > 0) {
            setCurrentCounter(currentCounter + 1);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log("CHECK: ", props.currentEmotion);
            const data = await axios.get(`http://localhost:3500/events?tag=${props.currentEmotion}`);
            if (data) {
                setEventData(data.data[0]);
                console.log(data.data[0]);
            }
        }
        // 
        //fetchData().catch(console.error);
        setEventData([{
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
            title: 'Cat',
            description: 'Cat pics',
            id: 123
        },
        {
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
            title: 'Cat123123712371273',
            description: 'Heheheheheh',
            id: 1234554
        }]);
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