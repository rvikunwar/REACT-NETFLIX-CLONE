import React ,{useEffect, useState} from 'react';
import "./Nav.css";


function Nav() {
    const [show,handleShow] =useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>150){
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            console.log("dhjsgj")
            window.removeEventListener("scroll");
    };
    },[])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className="nav_logo"
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix Logo"/>

            <img className="nav_avatar"
            src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
            alt="Netflix avatar"/>
        </div>
    )
}

export default Nav
