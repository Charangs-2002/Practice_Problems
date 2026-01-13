import React from 'react';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/homepage/homepage';
function App() {
  return (
    <div className="">
    <Navigation />
    <div>
       <Homepage/>
    </div>
    </div>
  );
}

export default App;
