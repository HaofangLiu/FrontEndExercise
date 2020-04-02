import React from 'react';
import Add from './add';
import { useSelector } from 'react-redux';
import List from './list';
import Footer from './footer';
function App() {
  return (
    <div className="App">
        <h1>购物车</h1>
        <Add />
        <List />
        <Footer />
    </div>
  );
}

export default App;
