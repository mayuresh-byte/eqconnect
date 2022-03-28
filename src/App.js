import React from 'react'
import Header from "./Header";
import Renter from './Renter';
import Tenants from './Tenants';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Renter/> */}
      <Tenants/>
    </div>
  );
}

export default App;
