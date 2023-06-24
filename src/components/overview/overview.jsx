import React from "react";
import './overview.scss';
import fruits from './../../assets/images/fruits.png'
import cloth from './../../assets/images/cloth.png'
import electronics from './../../assets/images/electronics.png'
import travel from './../../assets/images/travel.png'

const Overview = () => {



    return <div className="overview">

        <div className="overview-menu">
            
        </div>

        <div className="expense-graph">
            expense graph
        </div>


        <div className="recent-big-ex">

        <p className="big-expenses-title">Recent big expenses</p>

        <div className="big-expenses">

            <div className="recent-ex">
                <img src={fruits} alt="fruits" />
                <h4>fruits</h4>
                <span>$500</span>
            </div>

            <div className="recent-ex">
                <img src={cloth} alt="cloth" />
                <h4>cloth</h4>
                <span>$1500</span>
            </div>

            
            <div className="recent-ex">
                <img src={travel} alt="travel" />
                <h4>travel</h4>
                <span>$491</span>
            </div>

            
            <div className="recent-ex">
                <img src={electronics} alt="electronics" />
                <h4>electronics</h4>
                <span>$13000</span>
            </div>
        </div>

        </div>
    </div>
}
export default Overview 
