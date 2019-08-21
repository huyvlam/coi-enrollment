/* @flow */

import * as React from 'react';
import { pure } from 'recompose';
import './stylesheet/oneid-logo.scss';

type OneIDLogoProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  alt: ?string,
  title: ?string
}
const DEFAULT_IMG_SRC = '/static/img/oneid-logo.png';
const DEFAULT_ALT_CONTENT = 'Powered by Cisco OneId';

const OneIDLogo = ({
  size,
  src = DEFAULT_IMG_SRC,
  alt = '',
  title = '',
  className = ''
} = OneIDLogoProps) => {
  return !size ?
    null : <img alt={DEFAULT_ALT_CONTENT} src={src} className={`${size}-oneid-logo ${className}`} />
}

export default pure(OneIDLogo);
