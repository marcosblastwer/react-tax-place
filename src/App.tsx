import React from 'react';
import GlobalStyles from './styles/global-styles';

import Routes from './routes';
import { AuthProvider } from './domain/contexts/auth';

const App: React.FunctionComponent = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;
