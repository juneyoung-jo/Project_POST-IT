import React, { useState, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import styled from 'styled-components';
import {
  Avatar,
  Badge,
  Button,
  Card,
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  Drawer,
  FormGroup,
} from '@material-ui/core';

const Signup = () => {
  // styles
  const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
  `;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [url, setUrl] = useState('');
  const getCat = () => {
    return new Promise(async (resolve, reject) => {
      axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
          res.data;
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };
  getCat();
  return (
    <Wrapper>
      <Avatar></Avatar>
      <Badge>이것은 뱃지에요. 근데 뭔지 모르겠어요..</Badge>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        style={{ transition: 'all 0.5s ease-in-out' }}
      >
        이 공간 밖을 눌러보세요.
      </Drawer>
      {/* Drawer 버튼 */}
      <Button onClick={() => setDrawerOpen(true)}>이 버튼을 눌러보세요.</Button>

      {/* form-group 예제 with Card */}
      <Card style={{ padding: '16px' }}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">이메일</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              이메일을 입력해주세요.
            </FormHelperText>
          </FormControl>
        </FormGroup>
      </Card>
    </Wrapper>
  );
};

export default Signup;
