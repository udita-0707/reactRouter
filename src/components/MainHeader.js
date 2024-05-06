import React from "react";
import { Outlet } from "react-router-dom";
function MainHeader(){
    return (
        <div>
            <Outlet/> {/* Outlet is used to render the child route elements along with the parent route element */}
        </div>
    )
}

export default MainHeader;