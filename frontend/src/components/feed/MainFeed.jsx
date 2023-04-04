import CardGroup from "./CardGroup";
//import CardItem from './CardItem';
import React, { useState } from 'react';
function MainFeed(props) {
    const [data, setData] = useState([
        {
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
            title: 'Cat',
            description: 'Cat pics',
            id: 123
        }],
        [
            {
                img: "https://flowbite.com/docs/images/blog/image-1.jpg",
                title: 'Cat123123712371273',
                description: 'Heheheheheh',
                id: 1234554
            }]);
    return (
        <div className="w-2/3 flex-col space-evenly">
            <h3 className="text-2xl mb-8 text-gray-200">
                {`In case you were feeling, ${props.currentEmotion}`}
            </h3>
            <CardGroup data={data} />

        </div>

    )
}
export default MainFeed;