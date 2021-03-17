import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Container, Grid } from '@material-ui/core';
import { TurnedIn, MoreVert } from '@material-ui/icons';

const Wrapper = styled.div`
  top: 0;
  position: relative;
  margin: 1rem auto;
  display: block;
  width: 100%;
  height: 100vh;
  img {
    max-height: 250px;
    object-fit: contain;
  }
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

function Contents() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} sm={4}>
            <Card>
              <img
                src="https://storage.surfit.io/env/landing/RwDpw/img-8789728795fd9e37337f16.jpg"
                alt="random image"
              />
              <CardButtonGroup />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Contents;
