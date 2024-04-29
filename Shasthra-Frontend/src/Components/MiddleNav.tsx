
import React, { useState , useEffect} from "react";
import "../Styles/MiddleNav.css";

function MiddleNav({ segments }) {
    const [showDropdown, setShowDropdown] = useState(false);
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

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    function LoadSignIn(){
        window.location.href = '/signin';
    }
    function LoadSignUp(){
        window.location.href = '/signup';
    }

    return (
        <div className="middle-nav">
            <div className="middle-nav-max">
                {segments.map((segment, index) => (
                    <h1 key={index} className="nav-segments">{segment}</h1>
                ))}
            </div>
            <div className={`middle-nav-min ${showDropdown ? "show-dropdown" : ""}`}>
                <button className="dropdown-button" onClick={toggleDropdown}>Menu</button>
                <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                    {segments.map((segment, index) => (
                        <h1 key={index} className="nav-segments-min">{segment}</h1>
                    ))}
                    {windowWidth < 968 ? <h1 className="nav-segments-min nav-button "  onClick={LoadSignIn}>Sign In</h1> : null}
                    {windowWidth < 968 ? <h1 className="nav-segments-min nav-button " onClick={LoadSignUp}>Sign Up</h1> : null}

                </div>
            </div>
        </div>
    );
}

export default MiddleNav;