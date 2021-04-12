// page/_app.js
import Head from "next/head";

import { GlobalStyles } from "twin.macro";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Head>
      <title>Autoilevan ihmisen tavaratalo | Motonet Oy</title>
      <link rel="icon" href="/arvo6.svg" />
    </Head>
    <Component {...pageProps} />
  </div>
);

export default App;
