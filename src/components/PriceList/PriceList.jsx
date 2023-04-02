import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices]=useState([]);

    useEffect(()=>{
        fetch('prices.json')
        .then(res=> res.json())
        .then(data => setPrices(data));
    },[])

    return (
        <div className='mx-12'>
            <h1 className='text-6xl bg-purple-500 font-bold text-center text-blue-500' >Awesome Price</h1>
            <div className='grid md:grid-cols-3 gap-3 text-center'>
                {
                    prices.map(price => <PriceCard price={price} ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;