import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // La tua pagina aziendale (FS Brothers)
import ProdottoPage from './ProdottoPage'; // La nuova pagina (Polizza Sanitaria)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* La pagina del prodotto come Home principale */}
        <Route path="/" element={<ProdottoPage />} />
        
        {/* La pagina aziendale raggiungibile su /azienda */}
        <Route path="/azienda" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);