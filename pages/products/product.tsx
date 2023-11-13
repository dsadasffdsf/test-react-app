import Categories from '@/components/Categories';
import DetalProduct from '@/components/DetalProduct';
import ProductLine from '@/components/ProductLine';
import React from 'react';

const product = () => {
  return (
    <>
      <div className="flex ">
        <Categories />
        <DetalProduct />
      </div>
      <ProductLine />
    </>
  );
};

export default product;
