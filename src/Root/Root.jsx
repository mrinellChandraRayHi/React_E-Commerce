import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Root = () => {
    return (
        <div>
            <div><Sidebar/></div>
            <Outlet/>
        </div>
    );
};

export default Root;