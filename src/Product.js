import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"

export defaultfunction Product({title, image, price, rating}) {

/*     const [state, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket); */
 
    const addToBasket = () => {
        // dispatch the item into the data layer
/*         dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
            },
        });
    }; */
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{title}</strong>
                </p>
                <div className="product__rating">
                    {/* {Array(rating)
                        .fill()
                        .map((_,1) => (
                            <p>star</p>
                        )
                        )
                    } */}
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />

        </div>
    )
}

export default Product