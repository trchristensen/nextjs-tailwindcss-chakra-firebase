import '../styles/main.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <div className="container mx-auto p-4 bg-white rounded shadow">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
