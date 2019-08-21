import React from 'react';
import AppAside from 'APP/component/AppAside';
import { shallow } from 'enzyme';

describe('AppAside component', () => {
	it('renders without crashing', () => {
		shallow(<AppAside />)
	});
})
