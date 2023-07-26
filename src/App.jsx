import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from './Routes/Pubilc_Routes/PublicRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {PUBLIC_ROUTES.map(({ href, element }, index) => (
          <Route key={index} path={href} element={element} />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
