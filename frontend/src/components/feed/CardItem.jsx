import { Card } from 'flowbite-react';
import AcceptGroup from "./AcceptGroup";
function CardItem(props) {

    const selection = (select) => {
        // Fill over the code for handling the next pages
        props.selectionHandlerHandle({key:props.data.id, value: select});
    }

    return ( 
            props.data && <div className="container flex justify-center">
                <div className="max-w-sm flex flex-col items-center">
                    <Card imgSrc={props.data.img}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {props.data.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {props.data.description}
                        </p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </Card>
                    <div className="mt-4">
                        <AcceptGroup selectionHandle={selection} style={{ marginTop: '1rem' }} />
                    </div>
                </div>
            </div>
    );
}

export default CardItem;
