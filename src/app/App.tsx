import React from 'react';
import { Layout, useAuthListener } from "@features";
import { AppRoutes } from "@router";
import { ThemeProvider } from '@context';

const App: React.FC = () => {
    useAuthListener();
  return (
    <ThemeProvider>
       <Layout>
          <AppRoutes />
      </Layout>
    </ThemeProvider>
    );
  }


export default App;
