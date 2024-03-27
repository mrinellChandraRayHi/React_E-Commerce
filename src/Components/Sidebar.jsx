import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck  } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen p-2  bg-gray-100">
            <ul className="p-2 space-y-10 mt-24">
                <li>
                    <NavLink to='/'>
                    <button className="text-[1.5rem]"><HiOutlineMenuAlt2/></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    <button className="text-[1.5rem]"><HiOutlineHome/></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                    <button className="text-[1.5rem]"><CiShoppingCart/></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/favs'>
                    <button className="text-[1.5rem]"><IoHeartOutline/></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/orders'>
                    <button className="text-[1.5rem]"><CiDeliveryTruck/></button>
                    </NavLink>
                </li>            
            </ul>
        </div>
    );
};

export default Sidebar;