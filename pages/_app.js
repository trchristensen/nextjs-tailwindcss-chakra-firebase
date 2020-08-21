import '../styles/main.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="app">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
