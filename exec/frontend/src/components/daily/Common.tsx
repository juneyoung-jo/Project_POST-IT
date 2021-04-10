import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TurnedIn } from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
import { useRecoilState } from 'recoil';
import { toggleState } from 'index';

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
  function handleChange(e: any) {
    if (!localStorage.getItem('name')) return;

    setChecked(!checked);
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
  const [toggle, setToggle] = useRecoilState(toggleState);
  useEffect(() => {
    props.filterCard(toggle);
  }, []);

  const switchChange = async () => {
    setToggle(!toggle);
    props.filterCard(!toggle);
  };

  return (
    <SliderSwitch>
      <input
        type="checkbox"
        defaultChecked={toggle}
        onChange={switchChange}
      ></input>
      <span></span>
    </SliderSwitch>
  );
}
