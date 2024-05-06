import React from "react";
import { Outlet } from "react-router-dom";
function Home(){
    return (
        <div>
            <Outlet/> {/* Outlet is used to render the child route elements along with the parent route element */}
            <h1>Home</h1>
            <p>This is the home page</p>
            <p>Some content</p>
            <p>Some more content</p>
            
        </div>
    )
}

export default Home;