// page/_app.js
import Head from "next/head";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "../lib/apolloClient";

import { GlobalStyles } from "twin.macro";

const App = ({ Component, pageProps }) => {
  // const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>Autoilevan ihmisen tavaratalo | Motonet Oy</title>
        <link rel="icon" href="/arvo6.svg" />
      </Head>
      {/* <ApolloProvider client={apolloClient}> */}
      <GlobalStyles />
      <Component {...pageProps} />
      {/* </ApolloProvider> */}
    </>
  );
};

export default App;
