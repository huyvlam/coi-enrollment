/* @flow */

import * as React from 'react';

type FormProps = {
  name: string,
  layout: React.ReactNode,
  method: ?string,
  action: ?string,
  autoComplete: ?boolean,
  nosubmit: ?boolean
};
const DEFAULT_METHOD = 'POST';
const DEFAULT_AUTO_COMPLETE = 'OFF';
const DEFAULT_ACTION = '#';
const DEFAULT_NOSUBMIT = 'true'; // the boolean value need to be string

function Form({
  layout,
  name,
  method = DEFAULT_METHOD,
  action = DEFAULT_ACTION,
  autoComplete = DEFAULT_AUTO_COMPLETE
} = FormProps) {
  return (
    <form autoComplete={autoComplete} method={method} nosubmit={DEFAULT_NOSUBMIT}>
      <input autoComplete={autoComplete} name="hidden" type="text" className="display-none" />
      {layout}
    </form>
  );
}

export default Form;
