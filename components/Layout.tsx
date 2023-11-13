import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col m-auto container">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
