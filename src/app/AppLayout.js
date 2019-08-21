/* @flow */
import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import AppMain from 'APP/component/AppMain';
import AppFooter from 'APP/component/AppFooter';

import appRoutes from 'APP/metadata/app-route';
import { primaryTheme } from 'APP/metadata/design-theme';
import 'APP/stylesheet/app.scss';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { COI_LOCALE_INFO } from 'coi-common-ui/core/coi-locale';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const { dir } = COI_LOCALE_INFO;
const isRTL = (dir === 'rtl');

function AppLayout() {
	return (
		<Grid container direction="column" alignContent="center" className="app-layout">
			<CssBaseline />
			<ThemeProvider theme={primaryTheme}>
				<BrowserRouter forceRefresh={true}>
					{appRoutes.map((route, index) => {
						return (isRTL) ?
							(
								<StylesProvider jss={jss} key={index}>
									<Route
										exacts
										key={`route-${index}`}
										path={route.path}
										component={() => AppMain({ layout: <route.layout /> })}
									/>
								</StylesProvider>
							) : (
								<Route
									exacts
									key={`route-${index}`}
									path={route.path}
									component={() => AppMain({ layout: <route.layout /> })}
								/>
							)
					})}

				</BrowserRouter>
				<AppFooter />
			</ThemeProvider>
		</Grid>
	);

}

export default AppLayout;
