import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ContactsOutlined,
  ControlPointSharp,
  TurnedIn,
} from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const Button = styled.button`
  background: none;
  border: none;
  color: #858090;
`;

export function CardButtonGroup(props: any) {
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);
  // props.id 와 저장된 id 찾기
  // (...)
  function handleChange(e: any) {
    setChecked(!checked);
    // e.preventDefault();
    if (checked !== true) {
      props.idAdd(props.id);
    } else {
      props.idRemove(props.id);
    }
  }
  return (
    <Button className={checked ? 'bookmark' : 'null'} onClick={handleChange}>
      {<TurnedIn />}
    </Button>
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
