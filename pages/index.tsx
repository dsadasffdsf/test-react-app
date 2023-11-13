import React from 'react';
import Categories from '@/components/Categories';
import AdvertisingBanner from '@/components/AdvertisingBanner';
import ProductLine from '@/components/ProductLine';

const Home = () => {
  return (
    <>
      <div className="flex ">
        <Categories />
        <AdvertisingBanner />
      </div>
      <ProductLine />
    </>
  );
};

export default Home;
