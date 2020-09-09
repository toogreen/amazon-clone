import React from "react";
import "./Checkout.css"

function Checkout(){
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="" alt="" 
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal goes here</h2>
            </div>
        </div>
    )
}

export default Checkout;