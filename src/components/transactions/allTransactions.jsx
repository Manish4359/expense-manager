import React from "react";
import fruits from './../../assets/images/fruits.png'
import health from './../../assets/images/health.png'
import electronics from './../../assets/images/electronics.png'

import "./allTransactions.scss"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import editIcon from './../../assets/images/edit.png'
import deleteIcon from './../../assets/images/delete.png'

const AllTransactions =()=>{
    return <div className="all-transactions">
        
        <div className="transactions">

            <div className="transaction">
                <img src={fruits} alt="fruits" className="transaction-image"/>

                <div className="transaction-desc">

                <span className="transaction-title">puchased fruits</span>
                <span className="transaction-category">fruits</span>
                </div>

                <span className="transaction-price">-$500</span>
                <div className="transaction-edit">
                    <img  src={editIcon} alt="edit" />
                    </div>

                    <div className="transaction-delete">

                <img src={deleteIcon} alt="edit" />
                    </div>
            </div>

            <div className="transaction">
                <img src={health} alt="health" className="transaction-image"/>

                <div className="transaction-desc">

                <span className="transaction-title">puchased fruits</span>
                <span className="transaction-category">fruits</span>
                </div>

                <span className="transaction-price">-$500</span>
                <div className="transaction-edit">
                    <img  src={editIcon} alt="edit" />
                    </div>

                    <div className="transaction-delete">

                <img src={deleteIcon} alt="edit" />
                    </div>
            </div>

            <div className="transaction">
                <img src={electronics} alt="electronics" className="transaction-image"/>

                <div className="transaction-desc">

                <span className="transaction-title">puchased fruits</span>
                <span className="transaction-category">fruits</span>
                </div>

                <span className="transaction-price">-$500</span>
                <div className="transaction-edit">
                    <img  src={editIcon} alt="edit" />
                    </div>

                    <div className="transaction-delete">

                <img src={deleteIcon} alt="edit" />
                    </div>
            </div>

            
        </div>

        <div className="transaction-by-cat">
            <span>categories</span>

            <div className="categories">
                <div className="category">
                    <img src={electronics} alt="electronics" />

                    <div className="category-desc">
                    <p className="category-type">Electronics</p>
                        <p className="category-bill">$3099</p>

                    </div>
                </div>

                <div className="category">
                    <img src={fruits} alt="fruits" />

                    <div className="category-desc">
                    <p className="category-type">Fruits</p>
                        <p className="category-bill">$39</p>

                    </div>
                </div>

                <div className="category">
                    <img src={health} alt="health" />

                    <p className="category-type">Health</p>
                        <p className="category-bill">$309</p>

        
                </div>

                <div className="category">
                    <img src={health} alt="health" />

                    <p className="category-type">Health</p>
                        <p className="category-bill">$309</p>

        
                </div>
            </div>
        </div>
    </div>
}

export default AllTransactions