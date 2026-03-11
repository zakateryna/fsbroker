import React from "react";
import { Routes, Route } from "react-router-dom";
import AziendaPage from "./AziendaPage";
import ProdottoPage from "./ProdottoPage";
import CompanyPage from "./CompanyPage";
import PolizzaMainPage from "./PolizzaMainPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProdottoPage />} />
      <Route path="/home" element={<AziendaPage />} />
      <Route path="/azienda" element={<CompanyPage />} />
      <Route path="/polizza" element={<PolizzaMainPage />} />
    </Routes>
  );
}