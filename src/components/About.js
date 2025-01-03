import React from "react";
import { useNavigate } from "react-router-dom";
import ConfettiComponent from "./ConfettiComponent";
import './About.css';
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
        <div className="about-container">
            <h1>About</h1>
            <button onClick={backHandler}>Prev</button>
            <button onClick={clickHandler}>Contact</button>
            <button onClick={frontHandler}>Next</button>
            <img src={require('./Mehak.png')} alt="MJ" />
            <ConfettiComponent/>
        </div>
        
    )
}

export default About;