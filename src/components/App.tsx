import React from 'react';
import Header from './Header.tsx';
import Categories from './Categories.tsx';
import AdvertisingBanner from './AdvertisingBanner.tsx';
import ProductLine from './ProductLine.tsx';
import Footer from './Footer.tsx';

function App() {
  return (
    <div className="container m-auto ">
      <Header />
      <div className="flex ">
        <Categories />
        <AdvertisingBanner />
      </div>
      <ProductLine/>
      <Footer/>
    </div>
  );
}

export default App;
