import React from 'react';
import { Layout, useAuthListener } from "@features";
import { AppRoutes } from "@router";

const App: React.FC = () => {
    useAuthListener();
    return (
                <Layout>
                    <AppRoutes />
                </Layout>
    );
  }


export default App;
