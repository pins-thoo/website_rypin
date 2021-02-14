import React, { useEffect } from 'react';
import CONFIG from 'utils/config';
import { Route, Routes } from 'react-router-dom';

import Home from 'containers/Home';

const { NODE_ENV } = process.env;

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      `Environment: ${NODE_ENV}, Server Endpoint: ${CONFIG[NODE_ENV].SERVER_URL}`
    );
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;