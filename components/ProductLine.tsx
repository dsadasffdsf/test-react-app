import React, { useEffect, useState } from 'react';

import Product from './Product';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Skeleton from './Skeleton';
import Link from 'next/link';

function ProductLine() {
  const products = useSelector((state: RootState) => state.product);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
    
  //     setLoading(false);
  //   }, 3000);
  // }, []);


  return (
    <section className="bg-[#191919] rounded-[6px] mt-4 flex-grow pb-4">
      <h3 className="text-center text-white py-6">Trending</h3>
      <ul className="grid grid-cols-5 gap-4 mx-8">
        {loading
          ? Array.from({ length: 5 }, (_, index) => <Skeleton key={index} />)
          : products.map((item) => (
              <Link href="/products/product">
                <Product key={item.id} product={item} />
              </Link>
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
