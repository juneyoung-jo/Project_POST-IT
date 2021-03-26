import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';

// Base title
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.first};
`;

const CardButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function CardButtonGroup() {
  const [checked, setChecked] = useState(false);
  return (
    <CardButtonWrapper color="green">
      <Checkbox
        icon={<TurnedIn />}
        checkedIcon={<TurnedIn />}
        checked={checked}
        onChange={() => setChecked(!checked)}
        color="primary"
      />
      <a>
        <MoreVert />
      </a>
    </CardButtonWrapper>
  );
}

function Job() {
  return (
    <div>
      <Title>채용</Title>
      <br />
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {[4, 4, 4].map((value) => (
              <Grid item xs={12} md={4} sm={6}>
                <Card>
                  <img
                    src="https://storage.surfit.io/env/landing/RwDpw/img-8789728795fd9e37337f16.jpg"
                    alt="random image"
                  />
                  <CardButtonGroup></CardButtonGroup>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Job;
