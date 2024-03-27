import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Favorites = () => {
    return (
        <div className="">
            <div className="space-5 flex flex-col justify-center items-center h-screen">
                <h1 className="ml-16 text-xl font-semibold">You don't have any favourite products</h1>
                <NavLink to='/'>
                <button className="ml-16 bg-gray-800 text-white px-5 py-2 rounded-sm drop-shadow-xl flex items-center space-x-2">
                    <span>Back to the Shop</span>
                    <BsArrowLeft/>
                </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Favorites;