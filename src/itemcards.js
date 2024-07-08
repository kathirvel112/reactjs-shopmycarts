import React from 'react';

import { useCart } from 'react-use-cart'


const Itemscards = (props) => {
    const { addItem } = useCart();
    return (
    <>
    <div className='row'>
    <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text">{props.price}</p>

                    <button  className="btn btn-success" onClick={()=>addItem(props.item)}>Add to cart</button>
                </div>
            </div>
    </div>
   
    </>


);

};

export default Itemscards

