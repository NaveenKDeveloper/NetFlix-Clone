import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleshow]= useState(false);
    
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleshow(true);

            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };


    },[])

    return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
        src="https://fontmeme.com/permalink/210208/b0696afbcaf3ea64753e19abc5805044.png"
        alt="Netflix logo" 
        />

        <img className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo" 
        />

    

    </div>


    );
        
}

export default Nav