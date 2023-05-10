import React from "react"
import Portfolio from "./Portfolio";
import Warning from "./Warning"
import { useState, useEffect } from "react"

const Main = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <>
            {windowWidth > 992 ? <Portfolio /> : <Warning />}
        </>
    )
}

export default Main;