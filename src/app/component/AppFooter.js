/* @flow */

import * as React from 'react';
import Link from '@material-ui/core/Link';
import OneIDLogo from 'COI-MUI/logo/OneIDLogo';
import footerLinks from 'APP/metadata/footer-link';

type AppFooterProps = {
  links: Array<object>
}

function AppFooter({
  links = footerLinks.slice(0, 4)
} = AppFooterProps) {
  return (
		<footer className="app-footer center-text">
      <OneIDLogo size="xs" />
      <div className="footer-link-row">
        {links.map(({ label, url, target }, index) => (
          <Link rel="noopener" key={index} href={url} target={target}>{label}</Link>
        ))}
      </div>
    </footer>
  );
}

export default AppFooter;
