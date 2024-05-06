import React from "react";
import { useNavigate } from "react-router-dom";
import ConfettiComponent from "./ConfettiComponent";
function About(){
    const navigate = useNavigate();
    function clickHandler(){
        //move to contact page
        navigate("/contact");

    }
    function backHandler(){
        //move to home page
        navigate(-1);
    }
    function frontHandler(){
        //move to home page
        navigate(1);
    }
    return(
        <div>
            <h1>About</h1>
            <button onClick={backHandler}>Prev</button>
            <button onClick={clickHandler}>Contact</button>
            <button onClick={frontHandler}>Next</button>
            <img src="Mehak.png" alt="MJ" />
            <ConfettiComponent/>
        </div>
        
    )
}

export default About;