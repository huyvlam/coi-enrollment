/*
 * @desc: COI custom design theme overrides MUI default global theme
 */

import { createMuiTheme } from '@material-ui/core/styles';
import {
  ciscoSansRegularWoff2, ciscoSansBoldWoff2, ciscoSansLightWoff2, ciscoSansObliqueWoff2
} from 'APP/metadata/typography';
import palette from 'APP/metadata/color-palette';
import { COI_LOCALE_INFO } from 'coi-common-ui/core/coi-locale';

const { dir } = COI_LOCALE_INFO;

const {
  ciscoBlue, lightestBlue, indigo, red
} = palette;

export const primaryTheme = createMuiTheme({
  direction: dir,
  typography: {
    fontFamily: [
      'CiscoSans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
    ],
    lineHeight: 1.125,
    fontWeight: 400
  },
  palette: {
    primary: {
      main: ciscoBlue.hex,
      light: lightestBlue.hex,
      dark: indigo.hex,
      contrastText: '#FFF'
    },
    error: {
      main: red.hex
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          ciscoSansRegularWoff2, ciscoSansBoldWoff2, ciscoSansLightWoff2, ciscoSansObliqueWoff2
        ],
      },
    }
  }
});

export const secondaryTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Monaco', 'Inconsolata', 'Consolas', 'Courier New', 'Courier', 'Lucida Console', 'monospace'
    ]
  }
});
