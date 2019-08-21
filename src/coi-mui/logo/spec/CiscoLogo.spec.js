import React from 'react';
import ReactDOM from 'react-dom';
import CiscoLogo from 'COI-MUI/logo/CiscoLogo';

import { shallow } from 'enzyme';

describe('CiscoLogo component', () => {
	it('renders in DOM without crashing', () => {
	  const div = document.createElement('div');

	  ReactDOM.render(<CiscoLogo />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});
});
