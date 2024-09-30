import Home from '../components/Home';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head';
import { useEffect } from 'react';
import Preorder from '../components/Preorder'

function Index() {
  useEffect(() => {
    // Réinitialiser le thème ou les classes si nécessaire
    document.body.classList.remove('dark'); // Exemple, à adapter
  }, []);
  // return <Home />;
  return <Home />;
}

Index.getLayout = function getLayout(page) {
  return (
      <NextThemesProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <NextUIProvider>
        <Head>
          <title>Preorder Page</title>
        </Head>
        {page}
        </NextUIProvider>
      </NextThemesProvider>
  );
};

export default Index;
