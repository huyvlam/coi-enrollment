/* @flow */

import * as React from 'react';
import Link from '@material-ui/core/Link';

import { getSigninUrl } from 'coi-common-ui/core/coi-redirect';
import getContent from 'coi-common-ui/core/coi-content';

const {
  ENROLLMENT_TITLE, ENROLLMENT_HEADER_DESCRIPTION
} = getContent('enrollment app');
const { LINK_SIGN_IN } = getContent('link');

function CAHeadline() {
  const [href, setHref] = React.useState(null);
  (async function syncUrl() {
    setHref(await getSigninUrl());
  }());

  return (
    <React.Fragment>
      <h1>{ENROLLMENT_TITLE}</h1>
      <p>{ENROLLMENT_HEADER_DESCRIPTION} <Link href={href}>{LINK_SIGN_IN}</Link></p>
    </React.Fragment>
  );
}

export default CAHeadline;
