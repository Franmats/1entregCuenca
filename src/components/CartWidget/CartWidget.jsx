import React from 'react';

export const CartWidget = ({counter}) => {
    return (
        <>
            <div className="carrito">
                <button id="button-cart">
                <span className="material-symbols-outlined">shopping_cart_checkout</span>
                <span/>{counter}<span/>
                </button>
            </div>
        </> 
    );
}


