import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AziendaPage from './App'; // Importiamo AziendaPage dal file App.jsx
import ProdottoPage from './ProdottoPage'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Polizza Sanitaria come pagina principale */}
        <Route path="/" element={<ProdottoPage />} />
        
        {/* FS Brothers raggiungibile su /home */}
        <Route path="/home" element={<AziendaPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);