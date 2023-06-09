import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { deleteShoppingCart, removeFromDb } from '../utils/fakeDB'

const Cart = () => {
    const { cartArray } = useLoaderData();
    let total = 0;
    if (cartArray.length > 0) {
        for (const product of cartArray) {
            total = total + product.price * product.quantity
        }
    }

    /* Remove item from shopping cart */
    const handleRemoveItem = id => {
        removeFromDb(id);
    }

    /* Delete shopping cart */
    const deleteCartHandler = () => {
        deleteShoppingCart()
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cartArray.length ? 'Review Cart Items' : 'Cart is EMPTY'}</h2>
                <ul className='flex flex-col divide-y  divide-gray-700'>
                    {
                        cartArray.map(product => <CartItem
                            key={product.id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></CartItem>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                    {
                        cartArray.length > 0 ? <button onClick={deleteCartHandler} className='btn-outlined'>Clear Cart</button> :
                            <Link to="/shop">
                                <button className='btn-outlined'>Back To Shop</button>
                            </Link>
                    }
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;