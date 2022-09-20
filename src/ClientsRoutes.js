import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductsFromPartnersPage from './pages/ProductsFromPartnersPage';
import ContactsPage from './pages/ContactsPage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetails from 'pages/CharacterDetails';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products-partners" element={<ProductsFromPartnersPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:charactersId" element={<CharacterDetails />} />
    </Routes>
  );
};

export default ClientsRoutes;
