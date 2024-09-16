require('dotenv').config();

import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import preorderInfos from '../reducers/preorderInfos'
import users from '../reducers/users';
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ preorderInfos, users });
const persistConfig = { key: 'lunetoile', storage};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page);
  
  return (
    
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <NextUIProvider>
          <Head>
            <title>Next.js App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          {getLayout(<Component {...pageProps} />)}
          </NextUIProvider>
        </PersistGate>
      </Provider>
    
  );
}

export default App;
