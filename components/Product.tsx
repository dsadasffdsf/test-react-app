import React, { FC } from 'react';
import boots from '@/public/source/boots.png';
import { ProductProps} from '@/types/interface';
import Image from 'next/image';


const Product: FC<ProductProps> = ({ product }) => {
  const { id, name, price, description } = product;
  return (
    <li className="bg-[#212123] rounded-[8px] h-[17rem]">
      <div className="flex justify-between flex-col h-full">
        <div className="h-[140px] w-full object-cover">
          <Image className="w-full h-auto" src={boots} alt="product" />
        </div>
        <div className="pl-2 ">
          <div className="">
            <h4 className="text-white">{name}</h4>
            <p className="text-[#B8B8B8]">{description}</p>
          </div>
          <div className="flex justify-between self-end pb-4 pr-4 ">
            <div className="flex">
              <h3 className="text-[#6C3EB8]">{price}</h3>
              <p className="self-center pl-1 mb-1 line-through text-[#576067]">25$</p>
            </div>
            <h6 className="text-[#576067] self-end">19 people purchased</h6>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Product;

