import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import './global.css';

export default component$((): any => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
