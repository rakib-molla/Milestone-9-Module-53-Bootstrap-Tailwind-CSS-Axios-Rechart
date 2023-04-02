import React from 'react';
import Feature from '../feature/Feature';

const PriceCard = ({ price }) => {

    return (
        <div className='bg-indigo-400 nt-4 rounded-md p-4 mt-5'>
            <h2 className='text-center'>
                <span className=' text-5xl font-extrabold text-purple-500 '>{price.price}</span>
                <span className='text-2xl font-bold text-white' >/mon</span>
            </h2>
            <h1 className='text-2xl font-bold text-center'>{price.name}</h1>
            <p className='text-white underline'> Features: </p>
            {
                price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='w-full mt-auto hover:bg-green-500 font-bold bg-green-500 py-2 rounded-md  text-white '>Buy Now</button>
        </div>
    );
};

export default PriceCard;