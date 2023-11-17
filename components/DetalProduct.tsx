import Image from 'next/image';
import React from 'react';
import bootsDetalMax from '@/public/source/detalBoots-max.png';
import { useRouter } from 'next/router';
import { ProductProps} from '@/types/interface';

const DetalProduct: React.FC<ProductProps> = ({product}) => {

  
  const {} = product
  return (
    <section className="bg-[#191919] rounded-[6px] p-4 ml-4 h-[500px] flex-grow">
      <div className="grow flex">
        <div className="flex items-center ml-6 ">
          <Image className="w-[460px] h-[460px]" src={bootsDetalMax} alt="boots" />
          <div className="ml-4 space-y-1">
            <Image className="w-[110px] h-[110px] rounded-[8px]" src={bootsDetalMax} alt="boots" />
            <Image className="w-[110px] h-[110px]" src={bootsDetalMax} alt="boots" />
            <Image className="w-[110px] h-[110px]" src={bootsDetalMax} alt="boots" />
            <Image className="w-[110px] h-[110px]" src={bootsDetalMax} alt="boots" />
          </div>
        </div>
        <div className="text-[#F6F6F7] flex flex-col ml-10 max-w-[538px] justify-between">
          <div className="space-y-3">
            <h3>Bouncing sneaker Hermès</h3>
            <h3>599$</h3>
            <div className="flex space-x-2">
              <h3 className="text-[#576067]">Color:</h3>
              <h3>Blanc</h3>
            </div>

            <div className="flex space-x-2">
              <h5 className="self-center text-[#576067]">Sizes:</h5>
              <h5 className="n-active_size">4.5</h5>
              <h5 className="active_size">5</h5>
              <h5 className="n-active_size">5.5</h5>
            </div>

            <p className="text-[#B8B8B8]">
              Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a
              versatile and modern look. Sneaker in air mesh and suede goatskin. Light sole with
              contrasting design for a versatile and modern look.
            </p>

            <div className="text-center pt-8">
              <a href="#" className="shop_btn ">
                Add to cart
              </a>
              <a href="#" className="ml-6 shop_btn  ">
                Add to favorites
              </a>
            </div>
          </div>
          <div className="flex justify-between text-[#576067] ">
            <h6>19 people purchased</h6>
            <h6 className="underline">Find in a store</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalProduct;
