import React from 'react';

function Categories() {
  return (
    <section className="bg-[#191919] rounded-[6px] w-[19rem] p-4">
      <ul className="">
        <div className="text-white">CATEGORIES</div>
        <li className="text-[#576067] hover:text-[#8B57C6] cursor-pointer inline-block ">Computers</li>
      </ul>
      <div className="flex justify-between text-[#576067] mt-4">
        <div>Help</div>
        <div></div>
        Terms & Conditions
      </div>
    </section>
  );
}

export default Categories;
