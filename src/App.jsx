import React from "react";
import { Routes, Route } from "react-router-dom";
import ProdottoPage from "./ProdottoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProdottoPage />} />
      <Route path="/servizi" element={<ProdottoPage />} />
      <Route path="/metodo" element={<ProdottoPage />} />
      <Route path="/chi-siamo" element={<ProdottoPage />} />
      <Route path="/contatti" element={<ProdottoPage />} />
    </Routes>
  );
}