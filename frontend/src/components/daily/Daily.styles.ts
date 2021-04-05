import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

// 카드 컴포넌트 제작
export const StyledCard = styled(Card)`
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    transform: scale(1.02);
  }
  img {
    object-fit: fill;
    min-height: 300px;
    height: 300px;
  }
  .content {
    height: 100%;
    display: 'flex';
    flex-direction: 'column';
  }
  .inner {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background-color: #201d29;
    color: #b6b7b8;
    margin-top: 0;
    height: inherit;
  }
  p {
    margin: 10px;
  }
  button {
    background: none;
    border: none;
    margin-left: 3px;
    color: #858090;
  }
  // 북마크 체크시 색
  .bookmark {
    color: #804bd8;
  }
` as typeof Card;

export const StyledSelect = styled(Select)`
  .MuiSelect-root {
    color: #858090;
    border: none;
  }
  .item {
    color: 'red';
  }
` as typeof Select;
