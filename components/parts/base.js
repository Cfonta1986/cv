/* eslint-disable max-len */
import Head from 'next/head';

export const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Cristian Fontanini | Web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:site_name" content="Cristian Fontanini | Web developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cristian Fontanini | Web developer" />
        <meta property="og:locale" content="es" />
        {/* <meta property="og:url" content="https://jrgarciadev.com" /> */}
        <meta
          name="description"
          content="¡Hola! soy Cristian, a Software Developer based in Rosario, Argentina. Disfruto creando aplicaciones para Internet. Mi objetivo es crear siempre productos escalables y experiencias de alto rendimiento.."
        />
        <meta
          name="keywords"
          content="Developer, Javascript, Freelancer, React, Next, MongoDB, React Developer"
        />
        <meta property="og:image" content="https://jrgarciadev.com/avatar.jpeg" />
      </Head>
      {children}
    </div>
  );
};

