function Helpline(){
    return (
        <div className="ml-10">
            <h2 className="text-4xl font-bold mb-1 text-white flex-auto ml-auto mr-auto">
                Still feeling low ?
            </h2>
            <h3 className="text-xl font-bold mb-2 text-white flex-auto ml-auto mr-auto">
                Check out these resources to get in touch with professionals 
            </h3>
            <a rel="noopener noreferrer" href="https://www.samaritans.org/how-we-can-help/contact-samaritan/" target="_blank">
            <button
            type="button" 
            className="w-1/5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Samaritan
            </button>
            </a>
            <h3 className="text-xl font-bold mb-2 text-white flex-auto ml-auto mr-auto">
                Prefer texting ? 
            </h3>
            <a rel="noopener noreferrer" href="https://giveusashout.org/get-help/" target="_blank">
            <button
            type="button" 
            className="w-1/5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Shout
            </button>
            </a>
        </div>
    )
}
export default Helpline;