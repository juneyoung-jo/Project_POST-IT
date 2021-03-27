import styled from 'styled-components';

//슬라이드 토글 스위치
export const SliderSwitch = styled.label`
  margin-left: 5px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
  span:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 26px;
    left: 4px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + span {
    background: rgb(128, 75, 216);
    background-color: linear-gradient(45deg, #804bd8, #544ad8);
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
