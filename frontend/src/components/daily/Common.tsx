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
  // props.id 와 저장된 id 찾기
  // (...)
  function handleChange(e: any) {
    // e.preventDefault();
    setChecked(!checked);
    if (checked !== true) {
      props.idAdd(props.id);
    } else {
      props.idRemove(props.id);
    }
  }
  return (
    <CardButtonWrapper>
      <button
        className={props.checked.includes(props.id) ? 'bookmark' : 'null'}
        onClick={handleChange}
      >
        {<TurnedIn />}
      </button>
    </CardButtonWrapper>
  );
}

// Switch 버튼 컴포넌트
export function Switch(props: any) {
  const [checked, setChecked] = useState(false);

  const handleChange = async () => {
    setChecked(!checked);
    props.filterCard(!checked);
  };
  return (
    <SliderSwitch>
      <input type="checkbox" onChange={handleChange}></input>
      <span></span>
    </SliderSwitch>
  );
}
