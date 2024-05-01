import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {

  
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  //   <Router>
  //   <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/preorder" component={Preorder} /> {/* Route pour votre nouvelle page */}
  //   </Switch>
  // </Router>
  );
}

export default App;
