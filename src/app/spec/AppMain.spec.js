import React from 'react';
import AppMain from 'APP/component/AppMain';
import { shallow } from 'enzyme';

describe('AppMain component', () => {
	it('renders without crashing', () => {
		shallow(<AppMain />)
	});
})
