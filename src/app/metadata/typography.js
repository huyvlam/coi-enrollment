import CiscoSansRegularWoff2 from 'coi-common-ui/core/fonts/CiscoSansTTRegular.woff2';
import CiscoSansBoldWoff2 from 'coi-common-ui/core/fonts/CiscoSansTTBold.woff2';
import CiscoSansLightWoff2 from 'coi-common-ui/core/fonts/CiscoSansTTLight.woff2';
import CiscoSansObliqueWoff2 from 'coi-common-ui/core/fonts/CiscoSansTTRegularOblique.woff2';

export const ciscoSansRegularWoff2 = {
  fontFamily: 'CiscoSans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 100,
  src: `
    local('CiscoSansRegular'),
    local('CiscoSans-Regular'),
    url(${CiscoSansRegularWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

export const ciscoSansBoldWoff2 = {
  fontFamily: 'CiscoSans',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
    local('CiscoSansBold'),
    local('CiscoSans-Bold'),
    url(${CiscoSansBoldWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

export const ciscoSansLightWoff2 = {
  fontFamily: 'CiscoSans',
  fontStyle: 'light',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('CiscoSansLight'),
    local('CiscoSans-Light'),
    url(${CiscoSansLightWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

export const ciscoSansObliqueWoff2 = {
  fontFamily: 'CiscoSans',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('CiscoSansOblique'),
    local('CiscoSans-Oblique'),
    url(${CiscoSansObliqueWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};
