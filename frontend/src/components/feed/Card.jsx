import { Card } from 'flowbite-react';

function MyCard(props) {
    return (
        
        <div className="container">
            
            <div className="max-w-sm">
                <Card imgSrc={props.data.img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.data.title}
                    </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.data.description} 
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default MyCard;
