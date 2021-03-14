import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const Login = () => {
  // style
  const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
  `;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(password);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log;
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="id">아이디</label>
        <input value={email} onChange={handleChange} name="id" type="text" />
        <label htmlFor="password">비밀번호</label>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <span></span>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

export default Login;
