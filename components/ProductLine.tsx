import React, { useEffect, useState } from 'react';

import Product from './Product';
import Skeleton from './Skeleton';
import Link from 'next/link';
import { ProductsProps } from '@/types/interface';


const ProductLine: React.FC<ProductsProps> = ({ products }) => {
  const [loading, setLoading] = useState(false);
  // products = Array(); //определяю как массив иначе map скажет что undefined и не захочет работать
  if (!products) {
    return null; // или другой компонент заглушки, если products не определен
  }

  return (
    <section className="bg-[#191919] rounded-[6px] mt-4 flex-grow pb-4">
      <h3 className="text-center text-white py-6">Trending</h3>
      <ul className="grid grid-cols-5 gap-4 mx-8">
        {loading ? (
          Array.from({ length: 5 }, (_, index) => <Skeleton key={index} />)
        ) : Array.isArray(products) && products.length > 0 ? (
          products.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <Product key={item.id} product={item} />
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
      <div className="text-center pt-4">
        <a href="#" className="shop_btn ">
          See more
        </a>
      </div>
    </section>
  );
};

export default ProductLine;
