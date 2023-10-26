import React from 'react';

import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components/index';


function App() {
  return (
    
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
