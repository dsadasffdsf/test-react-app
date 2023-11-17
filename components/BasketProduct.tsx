import Image from 'next/image';
import React from 'react';
import boots from '@/public/source/boots.png';

const BasketProduct = () => {
  return (
    <li className="flex justify-between items-center bg-[#212123] p-4 rounded-[8px]">
      <Image className="w-[100px] h-[50px] rounded-[6px]" src={boots} alt="boots" />
      <div className="grow ml-6 ">
        <h5 className="text-white text-2xl">Nike ZoomX 2023</h5>
        <h6 className="text-[#B8B8B8] text-xs">Sneakers</h6>
      </div>
      <div className="grow">
        <h3 className="text-white font-bold ">99$</h3>
      </div>
      <div className="flex justify-center items-center space-x-4 grow">
        <div className="n-active_basket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none">
            <path
              d="M15.4895 8.3125H3.51055C2.8834 8.3125 2.375 8.84316 2.375 9.5C2.375 10.1568 2.8834 10.6875 3.51055 10.6875H15.4895C16.1166 10.6875 16.625 10.1568 16.625 9.5C16.625 8.84316 16.1166 8.3125 15.4895 8.3125Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        </div>
        <h5 className="text-[#576067]">1</h5>
        <div className="active_basket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none">
            <g clip-path="url(#clip0_103_316)">
              <path
                d="M13.125 6.5625H8.4375V1.875C8.4375 1.3575 8.0175 0.9375 7.5 0.9375C6.9825 0.9375 6.5625 1.3575 6.5625 1.875V6.5625H1.875C1.3575 6.5625 0.9375 6.9825 0.9375 7.5C0.9375 8.0175 1.3575 8.4375 1.875 8.4375H6.5625V13.125C6.5625 13.6425 6.9825 14.0625 7.5 14.0625C8.0175 14.0625 8.4375 13.6425 8.4375 13.125V8.4375H13.125C13.6425 8.4375 14.0625 8.0175 14.0625 7.5C14.0625 6.9825 13.6425 6.5625 13.125 6.5625Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_103_316">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="mr-10">
        <h3 className="text-[#6C3EB8] font-bold">99$</h3>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <g clip-path="url(#clip0_103_289)">
            <path
              d="M5.65572 6.383C5.75272 6.4805 5.88022 6.529 6.00772 6.529C6.13522 6.529 6.26272 6.4805 6.35972 6.383C6.55422 6.1885 6.55422 5.873 6.35972 5.6785L2.37722 1.692C2.18272 1.4975 1.86772 1.4975 1.67322 1.692C1.47872 1.8865 1.47872 2.202 1.67322 2.3965L5.65572 6.383Z"
              fill="white"
              fill-opacity="0.5"
            />
            <path
              d="M8.70342 8.024L14.3259 2.3965C14.5204 2.202 14.5204 1.8865 14.3259 1.692C14.1314 1.4975 13.8164 1.4115 13.6219 1.6065L7.64792 7.5H7.49992V7.6725L1.59992 13.6515C1.40542 13.846 1.44242 14.1615 1.63642 14.356C1.73342 14.4535 1.87942 14.502 2.00692 14.502C2.13442 14.502 2.27092 14.4535 2.36792 14.356L7.99492 8.729L13.6194 14.3565C13.7164 14.454 13.8454 14.5025 13.9724 14.5025C14.0994 14.5025 14.2279 14.454 14.3249 14.3565C14.5194 14.162 14.5199 13.8465 14.3254 13.652L8.70342 8.024Z"
              fill="white"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_103_289">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </li>
  );
};

export default BasketProduct;
