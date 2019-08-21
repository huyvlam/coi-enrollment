import React from 'react';
import ReactDOM from 'react-dom';
import LanguageDropdown from 'COI-MUI/menu/LanguageDropdown';

import { shallow } from 'enzyme';

describe('LanguageDropdown component', () => {
	it('renders in DOM without crashing', () => {
	  const div = document.createElement('div');

	  ReactDOM.render(<LanguageDropdown />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});
});
