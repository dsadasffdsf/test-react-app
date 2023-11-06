import React from 'react';
import bestSeller from '../source/bestseller.png'; 

function AdvertisingBanner() {
  return (
    <section className="bg-[#191919] rounded-[6px] p-4 ml-4 h-[500px] flex-grow">
      <div className="grow">
        <h1 className="text-[#212123] ">BIG SALE 20%</h1>
        <div className="relative">
          <div>
            <h4 className="text-[#616E74] ">the bestseller of 2022 </h4>
            <h2 className="text-[#F6F6F7] pb-6 ">LENNON r2d2 <br /> with NVIDIA 5090 TI</h2>
            <a href="#" className="shop_btn ">
              Shop Now
            </a>
          </div>
          <div className="">
            <img className="absolute right-0 top-0" src={bestSeller} alt="bestSeller" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvertisingBanner;


