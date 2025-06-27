import React from 'react';
import  { useUserAuthListener }  from "@features/auth/useAuthListener";
import  { Layout } from "@features/layout/Layout";
import  { AppRoutes }  from "@router/appRoutes";
import  { ThemeProvider } from '@context/ThemeContext';

const App: React.FC = () => {
    useUserAuthListener();
  return (
    <ThemeProvider>
       <Layout>
          <AppRoutes />
      </Layout>
    </ThemeProvider>
    );
  }


export default App;
