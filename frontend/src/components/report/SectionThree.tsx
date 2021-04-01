import React from 'react';
import { useStyles } from './material.styles';
import PieChart from 'components/chart/common/PieChart';

import { Grid } from '@material-ui/core';

function SectionThree() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid className={classes.grid} item xs={12}>
          <PieChart category="OS" chartId="os-chart" />
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <PieChart category="Editor" chartId="editor-chart" />
        </Grid>
      </Grid>
    </>
  );
}

export default SectionThree;
