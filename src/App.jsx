import React from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calculator />
      <About />
      <Footer />
    </div>
  );
}

export default App;
