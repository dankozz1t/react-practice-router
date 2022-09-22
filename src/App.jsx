import { BrowserRouter } from 'react-router-dom';

import Header from './modules/Header';

import ClientsRoutes from './ClientsRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/react-practice-router/">
      <Header />
      <ClientsRoutes />
    </BrowserRouter>
  );
};
