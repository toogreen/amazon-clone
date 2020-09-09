import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, image, title, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div clasName='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    {price}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                ))} 
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct