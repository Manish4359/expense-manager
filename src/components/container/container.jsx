import React from "react";
import './container.scss';
import Overview from "../overview/overview";
import AllTransactions from "../transactions/allTransactions";

const Container=()=>{
    return <div className="container">

    <div className="main">

        <div className="navigation">
            <span className="app-name">extrack</span>

            <ul className="navigation-options">
                <li >overview</li>
                <li className="active">all Transactions</li>
                <li>profile</li>
            </ul>
        </div>
        <AllTransactions/>
    </div>
    </div>
}

export default Container