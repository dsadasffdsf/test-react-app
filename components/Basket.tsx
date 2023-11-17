import React from 'react';
import BasketProduct from './BasketProduct';

const Basket = () => {
  return (
    <section className="bg-[#191919] rounded-[6px] p-4 ml-4 h-[500px] flex-grow ">
      <div className="grow mx-4">
        <h3 className="text-white mb-4">Your cart</h3>
        <ul >
          <BasketProduct />
        </ul>
      </div>
    </section>
  );
};

export default Basket;
