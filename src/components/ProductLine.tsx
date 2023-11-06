import React, { useEffect, useState } from 'react';

import Product from './Product.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store.tsx';
import Skeleton from './Skeleton.tsx';

function ProductLine() {
  const products = useSelector((state: RootState) => state.product);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log('sdfdsfdsf');
      setLoading(false);
    }, 3000);
  }, []);
  let productList;

  // if (!loading) {
  //   productList = products.map((item) => (
  //     <Product key={item.id} product={item} />
  //   ));
  // }else{

  // }

  return (
    <section className="bg-[#191919] rounded-[6px] mt-4 flex-grow pb-4">
      <h3 className="text-center text-white py-6">Trending</h3>
      <ul className="grid grid-cols-5 gap-4 mx-8">
        {productList}
        {loading ? (
          Array.from({ length: 5 }, (_, index) => (
            <Skeleton key={index} />
          )) 
        ) : (
          products.map((item) => (
            <Product key={item.id} product={item} />
          ))
        )}
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
