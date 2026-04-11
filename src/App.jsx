import React from "react";
import { Routes, Route } from "react-router-dom";
import ProdottoPage from "./ProdottoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProdottoPage />} />
    </Routes>
  );
}