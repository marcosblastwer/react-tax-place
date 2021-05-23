import React from 'react'

import { useAuth } from '../../domain/contexts/auth'

const AppHomePage: React.FunctionComponent = () => {
  const auth = useAuth()

  return (
    <div>
      <p>App home page</p>
      <button onClick={() => auth.signOut()}>Sair</button>
    </div>
  );
}

export default AppHomePage;
