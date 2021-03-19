import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import GitHub from '@material-ui/icons/GitHub';

// styles
function Copyright() {
  return (
    <Typography color="primary" align="center">
      {'Copyright © '}
      <a color="inherit" href="#">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Login() {
  return (
    <Container>
      <Typography variant="h5">로그인</Typography>
      <Typography color="primary" style={{ marginBottom: '3rem' }}>
        로그인을 통해 딱 맞는 IT 트렌드 분석 결과를 확인하세요.
      </Typography>
      <Button
        size="large"
        startIcon={<GitHub />}
        variant="contained"
        color="primary"
      >
        깃헙 로그인
      </Button>
      <Button
        size="large"
        startIcon={<GitHub />}
        variant="contained"
        color="primary"
      >
        깃헙 로그인
      </Button>
      <Copyright />
    </Container>
  );
}

export default Login;
