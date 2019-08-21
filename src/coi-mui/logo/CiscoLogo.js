/* @flow */

import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import { pure } from 'recompose';
import './stylesheet/cisco-logo.scss';

type CiscoLogoProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const CiscoLogo = ({ size } = CiscoLogoProps) => {
  return !size ?
    null : <Icon className={`${size}-cisco-logo`} />
}

export default pure(CiscoLogo);
