import React, { useState } from 'react';
import styled from 'styled-components';
import { TurnedIn } from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

export function CardButtonGroup() {
  const [checked, setChecked] = useState(false);
  return (
    <CardButtonWrapper color="green">
      <button
        className={checked ? 'bookmark' : 'null'}
        onClick={() => setChecked(!checked)}
      >
        {<TurnedIn />}{' '}
      </button>
    </CardButtonWrapper>
  );
}

// Switch 버튼 컴포넌트
export function Switch() {
  return (
    <SliderSwitch>
      <input type="checkbox" onChange={() => console.log('hello')}></input>
      <span></span>
    </SliderSwitch>
  );
}
