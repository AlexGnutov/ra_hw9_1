import { Outlet } from "react-router-dom";
import Menu from "./menu";

function Main() {
    return (
        <>
            <Menu/>
            <div className="page">
                <Outlet/>
            </div>
        </>
    )
}

export default Main;
