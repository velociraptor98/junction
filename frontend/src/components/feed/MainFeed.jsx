import MyCard from "./Card";
import React, { useState, useEffect } from 'react';

function MainFeed(props){


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch('https://api.example.com/data')
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, []);

    const [data, setData] = useState(
        {
          img: "https://flowbite.com/docs/images/blog/image-1.jpg",
          title: 'Cat',
          description: 'Cat pics'
        });

  

    return(
        <div>
            {`In case you were feeling, ${props.currentEmotion}`}

            <MyCard data={data}/>
        </div>
        
    )
}
export default MainFeed;