import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from 'APP/AppLayout';
// import AppHeader from 'APP/component/AppHeader';
// import AppMain from 'APP/component/AppMain';
// import AppFooter from 'APP/component/AppFooter';
// import AppAside from 'APP/component/AppAside';

import { shallow } from 'enzyme';


describe('AppLayout component', () => {
	it('renders in DOM without crashing', () => {
	  const div = document.createElement('div');

	  ReactDOM.render(<AppLayout />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});
  //
	// const layout = shallow(<AppLayout />)
  //
	// it('renders AppHeader', () => {
	// 	expect(layout).toContainReact(<AppHeader />)
	// });
  //
	// it('renders AppMain', () => {
	// 	expect(layout).toContainReact(<AppMain />)
	// });
  //
	// it('renders AppFooter', () => {
	// 	expect(layout).toContainReact(<AppFooter />)
	// });
  //
	// it('renders AppAside', () => {
	// 	expect(layout).toContainReact(<AppAside />)
	// });
});
