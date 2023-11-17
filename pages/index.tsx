import React from 'react';
import Categories from '@/components/Categories';
import AdvertisingBanner from '@/components/AdvertisingBanner';
import ProductLine from '@/components/ProductLine';
import axios from 'axios';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ProductsProps } from '@/types/interface';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params || {};
    const response = await axios.get(`http://localhost:3000/api/products`);
    const data = await response.data;
    // const data = null;

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { products: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
};

const Home: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      <div className="flex ">
        <Categories />
        <AdvertisingBanner />
      </div>
      <ProductLine products={products} />
    </>
  );
};

export default Home;
