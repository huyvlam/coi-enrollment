import {
  urlToPrivacy, urlToTermsConditions,
  CISCO_COOKIES_URL, CISCO_FEEDBACK_URL, CISCO_TRADEMARK_URL
} from './cisco-url';
import browserPath from 'coi-common-ui/core/coi-path-browser';

const footerLinks = [
	{
		name: 'contact',
		target: '_self',
		label: 'Contact Support', //CONTACT_SUPPORT_NAME,
		url: browserPath('contact')
	},
	{
		name: 'feedback',
		target: '_blank',
		label: 'Feedback', //LINK_FEEDBACK,
		url: CISCO_FEEDBACK_URL
	},
	{
		name: 'cookies',
		target: '_blank',
		label: 'Cookies Policy', //LINK_COOKIES_POLICY,
		url: CISCO_COOKIES_URL
	},
	{
		name: 'trademark',
		target: '_blank',
		label: 'Trademark', // LINK_TRADEMARKS,
		url: CISCO_TRADEMARK_URL
	},
	{
		name: 'privacy',
		target: '_blank',
		label: 'Privacy', // LINK_PRIVACY_STATEMENT,
		url: urlToPrivacy()
	},
	{
		name: 'terms',
		target: '_blank',
		label: 'Terms & Conditions', // LINK_TERMS_CONDITION,
		url: urlToTermsConditions()
	}
];

export default footerLinks;
