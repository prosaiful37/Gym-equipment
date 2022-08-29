import React from 'react';
import Advartise from './Advartise/Advartise';
import Banner from './Banner/Banner';
import BrandStock from './Brand/BrandStock';
import InventoryItem from './InventoryItem/InventoryItem';
import Offers from './InventoryOffers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advartise></Advartise>
            <InventoryItem></InventoryItem>
            <Offers></Offers>
            <BrandStock></BrandStock>
        </div>
    );
};

export default Home;