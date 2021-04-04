import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlPointSharp, TurnedIn } from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const CardButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

export function CardButtonGroup(props: any) {
  const [checked, setChecked] = useState(false);

  function handleChange(e: any) {
    e.preventDefault();
    setChecked(!checked);
    if (checked !== true) {
      props.idAdd(props.id);
    } else {
      props.idRemove(props.id);
    }
  }
  return (
    <CardButtonWrapper color="green">
      <button className={checked ? 'bookmark' : 'null'} onClick={handleChange}>
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
