import React from 'react'

import AppRoutes from '../../routes/auth.app.routes'
import Layout from '../../components/Layout'

const AppPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default AppPage;
