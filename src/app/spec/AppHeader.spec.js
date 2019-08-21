import React from 'react';
import AppHeader from 'APP/component/AppHeader';
import { shallow } from 'enzyme';

describe('AppHeader component', () => {
	it('renders without crashing', () => {
		shallow(<AppHeader />)
	});
})
