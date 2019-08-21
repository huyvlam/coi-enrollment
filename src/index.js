import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from 'APP/AppLayout';
import { CookiesProvider } from 'react-cookie';

/**
 * @desc: For better performance, cisco-sans, coi-sass-styling, coi-sass-override are loaded as external links. However, you can remove external links in "index.html" and uncomment the line belows to load the stylesheets inline
 */
// import 'coi-common-ui/core/cisco-sans.css';
// import 'coi-common-ui/core/coi-sass-styling.css';
// import 'coi-common-ui/core/coi-sass-override.css';

import * as serviceWorker from 'SRC/manager/service-worker';
import { COI_LOCALE_INFO } from 'coi-common-ui/core/coi-locale';

/*
 * @desc: Set it once and forget about it. The setting will take effect globally
 *        API path has environment, version dependency on consul.config
 */
// setBaseAPI(consulConfig);

/**
 * @desc: change text and page direction based on COI_LOCALE
 *        this method add "lang", "dir" attribute to html tag
 */
(function setHtmlLocale() {
  const { dir, language } = COI_LOCALE_INFO;
  document.querySelector('html').setAttribute('lang', language);
  document.querySelector('html').setAttribute('dir', dir);
}());

ReactDOM.render(
  <CookiesProvider>
    <AppLayout />
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
