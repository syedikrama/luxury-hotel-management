import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/pages/Index';
import './App.css';
import Form from './components/pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/das' element={<Index />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
