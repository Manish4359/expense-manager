import React from "react";
import './container.scss';
import Overview from "../overview/overview";

const Container=()=>{
    return <div className="container">

    <div className="main">

        <div className="navigation">
            <span className="app-name">extrack</span>

            <ul className="navigation-options">
                <li className="active">overview</li>
                <li>all expenses</li>
                <li>calendar</li>
                <li>profile</li>
            </ul>
        </div>
        <Overview/>

    </div>
    </div>
}

export default Container