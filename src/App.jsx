import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <Routes>
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}
