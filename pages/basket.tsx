import Basket from '@/components/Basket';
import Categories from '@/components/Categories';
import React from 'react';

const basket = () => {
  return (
    <>
      <div className="flex ">
        <Categories />
        <Basket />
      </div>
    </>
  );
};

export default basket;
