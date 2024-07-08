import React from 'react';
import Itemscards from './itemcards';
import data from './data'

const Home = () => {
    return (
        <>
        <h1 className='text-center mt-3'>All items</h1>

        <section className='py-4 container'>
            <div className='row justify-content-center g-3'>
                {data.productdata.map((item, index) => (
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                        <div>
                        <Itemscards
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                        />
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>
    </>


);

};

export default Home

