/* @flow */

import * as React from 'react';
import CiscoLogo from 'COI-MUI/logo/CiscoLogo';
import LocaleMenu from 'COI-MUI/menu/LocaleMenu';

import { COI_LOCALE } from 'coi-common-ui/core/coi-locale';

function CAHeader() {
  return (
    <React.Fragment>
      <CiscoLogo size="sm" />
      <LocaleMenu selection={COI_LOCALE} />
    </React.Fragment>
  );
}

export default CAHeader;
