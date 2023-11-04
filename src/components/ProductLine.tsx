import React, { useState } from 'react';
import boots from '../source/boots.png';
import Product from './Product.tsx';

function ProductLine() {
  
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: 'Товар 1',
      price: 10.99,
      description: 'Описание товара 1',
    },
    {
      id: 2,
      name: 'Товар 2',
      price: 19.99,
      description: 'Описание товара 2',
    },
  ];
  return (
    <section className="bg-[#191919] rounded-[6px] mt-4 flex-grow pb-4">
      <h3 className="text-center text-white py-6">Trending</h3>
      <ul className="grid grid-cols-5 gap-4 mx-8">

        {products.map((item)=>(
            <Product key={item.id} product={item} />
          ))}

      </ul>
      <div className="text-center pt-4">
        <a href="#" className="shop_btn ">
          See more
        </a>
      </div>
    </section>
  );
}

export default ProductLine;
