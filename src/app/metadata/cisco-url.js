/*
 * COI Commonly Used Urls
 */

const EN_US = 'en_US';
const DEFAULT_LOCALE = EN_US;

export const urlToCiscoHome = (locale = DEFAULT_LOCALE) => {
  return (locale === EN_US) ?
    'https://www.cisco.com/c/en/us/index.html' :
    `https://www.cisco.com/c/${locale.toLowerCase()}/index.html`;
}

export const urlToPrivacy = (locale = DEFAULT_LOCALE) => {
  return (locale === EN_US) ?
    'https://www.cisco.com/web/siteassets/legal/privacy.html' :
    `https://www.cisco.com/c/${locale.toLowerCase()}/about/legal/privacy-full.html`;
}

export const urlToTermsConditions = (locale = DEFAULT_LOCALE) => {
  return (locale === EN_US) ?
    'https://www.cisco.com/c/en/us/about/legal/terms-conditions.html' :
    `https://www.cisco.com/c/${locale.toLowerCase()}/about/legal/terms-conditions.html`;
}

export const CISCO_LOCATOR_URL = 'http://www.cisco.com/c/m/en_us/worldwide/locator.html'
export const CISCO_CONTACT_URL = 'http://www.cisco.com/cisco/web/siteassets/contacts/index.html'
export const CISCO_FEEDBACK_URL = 'https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ'
export const CISCO_SITEMAP_URL = 'http://www.cisco.com/c/en/us/about/sitemap.html'
export const CISCO_COOKIES_URL = 'http://www.cisco.com/web/siteassets/legal/privacy_full.html#cookies'
export const CISCO_TRADEMARK_URL = 'http://www.cisco.com/web/siteassets/legal/trademark.html'
export const CISCO_FAQ_URL = 'https://www.cisco.com/c/en/us/about/help/registration-benefits-help/faq.html#DA6'
