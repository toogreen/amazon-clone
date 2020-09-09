import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (0 items): <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>" This order contains a gfit
                    </small>

            )}
            decimalScale={2}
            value={0} // homewor; 
            display
        />

        <button>test</button>
    </div>;
}

export default Subtotal;