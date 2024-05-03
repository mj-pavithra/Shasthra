import React from "react";
import '../Styles/RightNav.css';
const RightNav:React.FC = () =>{
    
    function LoadSignIn(){
        window.location.href = '/signin';
    }
    function LoadSignUp(){
        window.location.href = '/signup';
    }

    return (
        <div className="right-nav">
            <h1 className="nav-button sign-in " onClick={LoadSignIn} >Sign In</h1>
            <h1 className="nav-button sign-up" onClick={LoadSignUp}>Sign Up</h1>
        </div>
    );
}

export default RightNav;