import Categories from '@/components/Categories';
import DetalProduct from '@/components/DetalProduct';
import ProductLine from '@/components/ProductLine';
import React from 'react';
import { GenProductsReq } from '@/types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductId, fetchProduct } from '@/redux/slices/productApiSlice';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { store, AppDispatch } from '@/redux/store';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id }: { id?: string } = context.params || {};

    const responseProducts = await axios.get(`http://localhost:3000/api/products`);
    const dataProducts = await responseProducts.data;
    if (!dataProducts) {
      return {
        notFound: true,
      };
    }

    const dataProduct = await store.dispatch(fetchProductId(id)); // Хуки на сервере использовать нельзя ,а это метод -его можно

    return {
      props: { product: dataProduct, products: dataProducts },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
};

const product: React.FC<GenProductsReq> = ({ product, products }) => {
  return (
    <>
      <div className="flex">
        <Categories />
        <DetalProduct product={product} />
      </div>
      <ProductLine products={products} />
    </>
  );
};

export default product;
