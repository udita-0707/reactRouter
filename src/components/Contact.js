import React from "react";
import { useNavigate } from "react-router-dom";
function Contact(){
    const navigate = useNavigate();
    function clickHandler(){
        //move to home page
        navigate("/");
    }
    return(
        <div>
            <h1>Contact</h1>
            <button onClick={clickHandler}>Home</button>
        </div>
        
    )
}

export default Contact