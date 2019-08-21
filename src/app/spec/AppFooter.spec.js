import React from 'react';
import AppFooter from 'APP/component/AppFooter';
import { shallow } from 'enzyme';

describe('AppFooter component', () => {
	it('renders without crashing', () => {
		shallow(<AppFooter />)
	});
})
