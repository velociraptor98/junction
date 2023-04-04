import CardItem from "./CardItem";
import { useState } from "react";
function CardGroup(props){
    // Use a simple iteration logic to get the current counter
    const[currentCounter,setCurrentCounter] = useState(0);
    const[itemList,setItemList] = useState([]);
    const selectionHandler = (select) => {
        let tempArray = itemList;
        tempArray.push(select);
        setItemList(tempArray);
        if(currentCounter<props.data.length && itemList.length > 0){
            setCurrentCounter(currentCounter+1);
        }
        console.log("HERER:",currentCounter);
    }
    return(
        <div>
            {
            props.data[currentCounter] ? 
            <CardItem  data = {props.data[currentCounter]}
            selectionHandlerHandle = {selectionHandler}/> : 
            <h3 className="text-2xl mb-8 text-gray-200">
                No more events for the day
            </h3>
            }
        </div>
    )
}
export default CardGroup;