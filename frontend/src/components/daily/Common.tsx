import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ContactsOutlined,
  ControlPointSharp,
  TurnedIn,
} from '@material-ui/icons';
import { SliderSwitch } from './Daily.styles';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
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
  // (...)
  function handleChange(e: any) {
    if (!localStorage.getItem('name')) return;

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
  // const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useRecoilState(toggleState);
  useEffect(() => {
    console.log(props);
    props.filterCard(toggle);
    console.log('버튼이 렌더링 됐나여?');
  }, []);

  // const alert = () => {
  //   props.filterCard(toggle);
  // };

  // const change = async () => {
  //   await setToggle((toggle) => {
  //     return !toggle;
  //   });
  // };

  const switchChange = async () => {
    setToggle(!toggle);
    props.filterCard(!toggle);
    console.log(!toggle);
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
