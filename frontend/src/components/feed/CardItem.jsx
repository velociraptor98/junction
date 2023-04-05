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
                    <Card imgSrc={props.data.img}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {props.data.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {props.data.description}
                        </p>
                    </Card>
                    <div className="mt-2">
                        <AcceptGroup selectionHandle={selection} style={{ marginTop: '1rem' }} />
                    </div>
                </div>
            </div>
    );
}

export default CardItem;
