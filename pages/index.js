import Home from '../components/Home';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';

function Index() {
  // return <Home />;
  return <Home />;
}

Index.getLayout = function getLayout(page) {
  return (
      <NextUIProvider>
        <Head>
          <title>Preorder Page</title>
        </Head>
        {page}
      </NextUIProvider>
  );
};

export default Index;
