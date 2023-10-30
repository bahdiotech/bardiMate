import React, { useState } from 'react';

import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components/index';



function App() {

  const [value, setValue] = useState('');
  return (
    
    <div className="App">
      <Header value={value} setValue={setValue} />
      <AllRoutes value={value} setValue={setValue} />
      <Footer />
    </div>
  );
}

export default App;
