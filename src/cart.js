import React from 'react';
import { useCart } from "react-use-cart";
import './cart.css'

const Cart = () => {
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        items, // Corrected variable name
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h1 className='text-center'>Your cart is empty</h1>;

    return (
        <>
        
        <section className='cart-postion container'>
            <div className='row justify-content-center'>
                <div className='col-12 container'>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="align-middle">
                                    <td className="text-center">
                                        <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                                    </td>
                                    <td className="text-center">{item.title}</td>
                                    <td className="text-center">{item.price}</td>
                                    <td className="text-center">Quantity ({item.quantity})</td>
                                    <td className="text-center">
                                        <div className="btn-group">
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                -
                                            </button>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                +
                                            </button>
                                            <button className='btn btn-danger ms-2' style={{ color: 'black' }} onClick={() => removeItem(item.id)}>
                                                Remove item
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        </>
    );
};

export default Cart;
