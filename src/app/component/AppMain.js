/* @flow */

import * as React from 'react';
import Grid from '@material-ui/core/Grid';

type AppMainProps = {
  layout: React.ReactNode
}

/*
 * @desc: Wrap all route/workflow in this main template
 */
function AppMain({ layout } = AppMainProps) {
  return (
    <Grid container component="main" direction="row" className="app-main">
      {layout}
    </Grid>
  );
}

export default AppMain;
