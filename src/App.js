import React from 'react';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/homepage/homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
function App() {
  return (
    <div className="">
    <Navigation />
    <div>
      {/* <Homepage/> */}
      <Product/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
