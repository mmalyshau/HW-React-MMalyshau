import React from 'react';
import { Layout } from "@features";
import { AppRoutes } from "@router";

const App: React.FC = () => {
    return (
                <Layout>
                    <AppRoutes />
                </Layout>
    );
  }


export default App;
