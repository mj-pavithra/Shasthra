import React from "react";
import '../Styles/LeftNav.css';

const LeftNav:React.FC = () =>{
    return (
        <div className="left-nav">
        <img src="../favicon2.ico" alt="logo" className="logo" />
            <h1 className="site-title">Shasthra</h1>
        </div>
    );
}

export default LeftNav;