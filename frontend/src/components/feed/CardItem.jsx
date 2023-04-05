import { Card } from 'flowbite-react';
import AcceptGroup from "./AcceptGroup";
function CardItem(props) {

    const selection = (select) => {
        // Fill over the code for handling the next pages
        props.selectionHandlerHandle({key:props.data._id, value: select});
    }

    return ( 
            props.data && <div className="container flex justify-center">
                <div className="max-w-sm flex flex-col items-center shadow-xl">
                    <Card className='overflow-auto min-w-5/6'>                        
                        <img class="rounded-lg w-64 h-64" src={props.data.image} alt="image description"></img>
                        <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white overflow-auto">
                            {props.data.name}
                        </h5>
                        <div className='flex flex-row justify-around'>
                        <p className="font-light text-gray-700 dark:text-gray-400 overflow-auto text-sm">
                            {props.data.organiser_info.name}
                        </p>
                        <p className="font-thin text-gray-700 dark:text-gray-400 overflow-auto text-sm">
                            {props.data.location}
                        </p>
                        </div>
                    </Card>
                    <div className="mt-1">
                        <AcceptGroup selectionHandle={selection} style={{ marginTop: '1rem' }} />
                    </div>
                </div>
            </div>
    );
}

export default CardItem;
