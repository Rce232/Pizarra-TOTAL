import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="La plataforma de análisis táctico futbolístico más avanzada con IA y visual futurista." />
        <meta name="keywords" content="tácticas online, pizarra tácticas, fútbol, análisis táctico, IA fútbol" />
        <meta name="author" content="Tu Nombre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
