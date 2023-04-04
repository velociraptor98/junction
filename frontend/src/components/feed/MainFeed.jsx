import MyCard from "./Card";
import React, { useState } from 'react';
function MainFeed(props) {
    const [data, setData] = useState(
        {
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
            title: 'Cat',
            description: 'Cat pics'
        });
    return (
        <div className="w-2/3 flex-col space-evenly">
            {`In case you were feeling, ${props.currentEmotion}`}
            <MyCard data={data} />
        </div>

    )
}
export default MainFeed;